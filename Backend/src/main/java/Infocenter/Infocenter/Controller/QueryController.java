package Infocenter.Infocenter.Controller;

import Infocenter.Infocenter.Entity.Managers;
import Infocenter.Infocenter.Entity.Query;
import Infocenter.Infocenter.Entity.Ratings;
import Infocenter.Infocenter.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class QueryController
{
    @Autowired
    QueryRepo queryRepo;

    @Autowired
    FacilityRepo facilityRepo;

    @Autowired
    ManagersRepo managersRepo;
    @Autowired
    GuestsRepo guestsRepo;

    /* Post Query */
    @PostMapping("/addquery/{facilityid}/{guestid}")
    public ResponseEntity<?> addquery(@PathVariable Integer facilityid,@PathVariable Integer guestid,@RequestBody Query obj)
    {
        var facilityinfo=facilityRepo.findById(facilityid).orElseThrow(()->new RuntimeException("Facilityid not found"));
        var guestinfo=guestsRepo.findById(guestid).orElseThrow(()->new RuntimeException("Guestid not found"));
        obj.setPosteddate(LocalDateTime.now());
        obj.setFacility10(facilityinfo);
        Managers manager = facilityinfo.getManagers();
        obj.setManagers11(manager);
        obj.setGuestss(guestinfo);
        queryRepo.save(obj);
        return new ResponseEntity<>("Query Posted Successfully", HttpStatus.OK);
    }


    /* Get All Query */
//    @GetMapping("/Getallquery")
//    public ResponseEntity<?> Getallquery()
//    {
//        List<Query> querylist=queryRepo.findAll();
//        return new ResponseEntity<>(querylist,HttpStatus.OK);
//    }

    /* Update Query based on queryid */
    @PutMapping("/updatequery/{queryid}")
    public ResponseEntity<?> updatequery(@PathVariable Integer queryid,@RequestBody Query obj)
    {
        var queryinfo=queryRepo.findById(queryid).orElseThrow(()->new RuntimeException("Queryid not Found"));
        if (queryinfo.getReply() != null && !queryinfo.getReply().isEmpty())
        {
            return new ResponseEntity<>("Query has already been replied to", HttpStatus.BAD_REQUEST);
        }
        queryinfo.setReply(obj.getReply());
        queryinfo.setReplydate(LocalDateTime.now());
        queryRepo.save(queryinfo);
        return new ResponseEntity<>("Query Replied Successfully",HttpStatus.OK);
    }

    /* Get that particular mangers query */
    @GetMapping("getquery/{managerid}")
    public ResponseEntity<?> getquery(@PathVariable Integer managerid)
    {
        var mangerinfo=managersRepo.findById(managerid).orElseThrow(()->new RuntimeException("Managerid not found"));
        var queryinfo=queryRepo.findByManagers11(mangerinfo);
        if (queryinfo.isEmpty()) {
            return new ResponseEntity<>("No queries found for this manager.", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(queryinfo,HttpStatus.OK);
    }

    /* Display Average Ratings */
    @GetMapping("/getavgratings/{facilityid}")
    public ResponseEntity<?> getavgratings(@PathVariable Integer facilityid) {
        // Find the facility by its ID
        var facilityinfo = facilityRepo.findById(facilityid)
                .orElseThrow(() -> new RuntimeException("Facility id not found"));

        // Get all queries related to the facility
        var queries = queryRepo.findByfacility10(facilityinfo);

        // If no queries available for the facility
        if (queries.isEmpty()) {
            return new ResponseEntity<>("No ratings available for this facility.", HttpStatus.OK);
        }

        // Prepare list to store detailed information of queries with ratings and replies
        List<Map<String, Object>> queryDetails = new ArrayList<>();

        // Calculate the average rating
        double averageRating = queries.stream()
                .filter(query -> query.getRatings() != null)  // Filter out null ratings
                .mapToInt(Query::getRatings)  // Map ratings to int
                .average()  // Calculate the average
                .orElse(0.0);  // Default to 0.0 if no valid ratings are present

        // Round the average to one decimal place
        double roundedAvgRating = Math.round(averageRating * 10.0) / 10.0;

        // Collect query details including the ratings, reply query, and reply date
        for (var query : queries) {
            Map<String, Object> queryInfo = new HashMap<>();
            queryInfo.put("query", query.getQuery());  // Assuming `getQuery` retrieves the query text
            queryInfo.put("rating", query.getRatings());  // Assuming `getRatings` retrieves the rating
            queryInfo.put("replyQuery", query.getReply());  // Assuming `getReplyQuery` retrieves the reply
            queryInfo.put("replyDate", query.getReplydate());  // Assuming `getReplyDate` retrieves the reply date

            queryDetails.add(queryInfo);
        }

        // Prepare the response object containing the average rating and query details
        Map<String, Object> response = new HashMap<>();
        response.put("averageRating", roundedAvgRating);
        response.put("queries", queryDetails);

        // Return the response
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
