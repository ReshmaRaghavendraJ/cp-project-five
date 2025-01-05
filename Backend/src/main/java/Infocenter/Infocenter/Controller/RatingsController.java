package Infocenter.Infocenter.Controller;

import Infocenter.Infocenter.Entity.Ratings;
import Infocenter.Infocenter.Repository.FacilityRepo;
import Infocenter.Infocenter.Repository.RatingsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class RatingsController
{
    @Autowired
    RatingsRepo ratingsRepo;

    @Autowired
    FacilityRepo facilityRepo;

    /* Post Ratings */
    @PostMapping("/addratings/{facilityid}")
    public ResponseEntity<?> addratings(@PathVariable Integer facilityid, @RequestBody Ratings obj)
    {
        var facilityinfo=facilityRepo.findById(facilityid).orElseThrow(()->new RuntimeException("Facilityid not found"));
       obj.setFacility4(facilityinfo);
        Ratings savedRating = ratingsRepo.save(obj);
        return new ResponseEntity<>(savedRating, HttpStatus.OK);
    }
}
