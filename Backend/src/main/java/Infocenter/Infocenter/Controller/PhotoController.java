package Infocenter.Infocenter.Controller;

import Infocenter.Infocenter.Entity.Photo;
import Infocenter.Infocenter.Entity.Text;
import Infocenter.Infocenter.Entity.Video;
import Infocenter.Infocenter.Repository.FacilityRepo;
import Infocenter.Infocenter.Repository.PhotoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class PhotoController {
    @Autowired
    PhotoRepo photoRepo;
    @Autowired
    FacilityRepo facilityRepo;

    /* Post photos */
    @PostMapping("/addphotos/{facilityid}")
    public ResponseEntity<?> addphotos(@PathVariable Integer facilityid, @RequestBody Photo obj)
    {
        var faclityinfo=facilityRepo.findById(facilityid).orElseThrow(()->new RuntimeException("Facility id not Found"));
        obj.setFacility2(faclityinfo);
        photoRepo.save(obj);
        return new ResponseEntity<>("Photo Added Successfully", HttpStatus.OK);
    }

    /* Get all Photo details */
    @GetMapping("/Getallphoto")
    public ResponseEntity<?>  Getallphoto()
    {
        List<Photo> photolist=photoRepo.findAll();
        return new ResponseEntity<>(photolist,HttpStatus.OK);
    }


    /* Get Photos based on facility id in front end - Services */
    @GetMapping("/getphoto/{facilityid}")
    public ResponseEntity<?>getphoto (@PathVariable Integer facilityid)
    {
        var facilityinfo=facilityRepo.findById(facilityid).orElseThrow(()->new RuntimeException("Facility id not found"));
        List<Photo>photolist=photoRepo.findByFacility2(facilityinfo);
        if (photolist.isEmpty()) {
            return new ResponseEntity<>("No Photos uploaded", HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(photolist,HttpStatus.OK);
    }
}
