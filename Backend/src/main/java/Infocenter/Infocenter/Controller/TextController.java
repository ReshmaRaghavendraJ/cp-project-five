package Infocenter.Infocenter.Controller;

import Infocenter.Infocenter.Entity.Text;
import Infocenter.Infocenter.Entity.Video;
import Infocenter.Infocenter.Repository.FacilityRepo;
import Infocenter.Infocenter.Repository.TextRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class TextController
{
    @Autowired
    TextRepo textRepo;

    @Autowired
    FacilityRepo facilityRepo;

    /* Post Text */
    @PostMapping("/addtext/{facilityid}")
    public ResponseEntity<?> addtext(@PathVariable Integer facilityid, @RequestBody Text obj)
    {
        var faclityinfo=facilityRepo.findById(facilityid).orElseThrow(()->new RuntimeException("Facility id not Found"));
        obj.setFacility3(faclityinfo);
        textRepo.save(obj);
        return new ResponseEntity<>("Text Added Successfully", HttpStatus.OK);
    }

    /* Get all text details */
    @GetMapping("/Getalltext")
    public ResponseEntity<?>  Getalltext()
    {
        List<Text> textlist=textRepo.findAll();
        return new ResponseEntity<>(textlist,HttpStatus.OK);
    }
}
