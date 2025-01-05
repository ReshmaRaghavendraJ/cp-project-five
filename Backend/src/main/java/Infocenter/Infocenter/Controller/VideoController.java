package Infocenter.Infocenter.Controller;

import Infocenter.Infocenter.Entity.Photo;
import Infocenter.Infocenter.Entity.Video;
import Infocenter.Infocenter.Repository.FacilityRepo;
import Infocenter.Infocenter.Repository.VideoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class VideoController
{
    @Autowired
    VideoRepo videoRepo;

    @Autowired
    FacilityRepo facilityRepo;

    /* Post Videos */
    @PostMapping("/addvideos/{facilityid}")
    public ResponseEntity<?> addvideos(@PathVariable Integer facilityid, @RequestBody Video obj)
    {
        var faclityinfo=facilityRepo.findById(facilityid).orElseThrow(()->new RuntimeException("Facility id not Found"));
        obj.setFacility1(faclityinfo);
        videoRepo.save(obj);
        return new ResponseEntity<>("Video Added Successfully", HttpStatus.OK);
    }

    /* Get all Videos */
    @GetMapping("/Getallvideo")
     public ResponseEntity<?>  Getallvideo()
    {
        List<Video> videolist=videoRepo.findAll();
        return new ResponseEntity<>(videolist,HttpStatus.OK);
    }

    /* Get videos based on facility id in front end - Services */
    @GetMapping("/getvideo/{facilityid}")
    public ResponseEntity<?>getvideo (@PathVariable Integer facilityid)
    {
        var facilityinfo=facilityRepo.findById(facilityid).orElseThrow(()->new RuntimeException("Facility id not found"));
        List<Video>videolist=videoRepo.findByFacility1(facilityinfo);
        if (videolist.isEmpty()) {
            return new ResponseEntity<>("No Videos uploaded", HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(videolist,HttpStatus.OK);
        }


}

