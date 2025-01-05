package Infocenter.Infocenter.Controller;

import Infocenter.Infocenter.Entity.City;
import Infocenter.Infocenter.Entity.Facility;
import Infocenter.Infocenter.Entity.Types;
import Infocenter.Infocenter.Repository.CityRepo;
import Infocenter.Infocenter.Repository.TypesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class TypesController
{
    @Autowired
    TypesRepo typesRepo;

    @Autowired
    CityRepo cityRepo;

    /* Post Faclity types */
    @PostMapping("/addtypes/{cityid}")
    public ResponseEntity<?> addtypes(@PathVariable Integer cityid, @RequestBody Types obj)
    {
        var cityinfo=cityRepo.findById(cityid).orElseThrow(()->new RuntimeException("City id not found"));
        obj.setCity2(cityinfo);
        typesRepo.save(obj);
        return new ResponseEntity<>("Facility Types added Successfully", HttpStatus.OK);
    }

    /* Get All types list */
    @GetMapping("/getalltypes")
    public ResponseEntity<?> getalltypes()
    {
        List<Types> typesList=typesRepo.findAll();
        return new ResponseEntity<>(typesList,HttpStatus.OK);
    }

    /* Get types based on City */
    @GetMapping("/gettypes/{cityid}")
    public ResponseEntity<?> gettypes(@PathVariable Integer cityid) {
        // Fetch the city by cityid
        var cityinfo = cityRepo.findById(cityid)
                .orElseThrow(() -> new RuntimeException("City not found"));

        // Fetch types associated with this city
        List<Types> typesList = typesRepo.findByCity2(cityinfo); // Assuming you have this method in your Types repository

        // Return the filtered list of types
        return new ResponseEntity<>(typesList, HttpStatus.OK);
    }
}
