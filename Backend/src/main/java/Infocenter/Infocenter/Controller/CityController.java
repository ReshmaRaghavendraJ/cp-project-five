package Infocenter.Infocenter.Controller;

import Infocenter.Infocenter.Entity.City;
import Infocenter.Infocenter.Repository.CityRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class CityController
{
    @Autowired
    CityRepo cityRepo;

    /* Add City */
    @PostMapping("/addcity")
    public ResponseEntity<?> addcity(@RequestBody City obj) {
        if (cityRepo.existsByCity(obj.getCity())) {
            return new ResponseEntity<>("City already Added", HttpStatus.CONFLICT);
        }
            cityRepo.save(obj);
            return new ResponseEntity<>("City Added Successfully", HttpStatus.OK);
    }

    /* Get All City list */
    @GetMapping("/getallcities")
    public ResponseEntity<?>getallcities()
    {
        List<City> cityList=cityRepo.findAll();
        return new ResponseEntity<>(cityList,HttpStatus.OK);
    }
}
