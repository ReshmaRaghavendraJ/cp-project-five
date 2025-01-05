package Infocenter.Infocenter.Controller;


import Infocenter.Infocenter.Entity.Facility;
import Infocenter.Infocenter.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@CrossOrigin("*")
public class FacilityController {
    @Autowired
    FacilityRepo facilityRepo;

    @Autowired
    ManagersRepo managersRepo;

    @Autowired
    TypesRepo typesRepo;

    @Autowired
    CityRepo cityRepo;




    /* Post Facility based on managerid (frontend-Manager dashboard) */
    @PostMapping("/addfacilities/{managerid}/{cityid}/{typeid}")
    public ResponseEntity<?>addfacilities(@PathVariable Integer managerid,@PathVariable Integer cityid,@PathVariable Integer typeid,@RequestBody Facility obj)
    {
        var managerinfo=managersRepo.findById(managerid).orElseThrow(()->new RuntimeException("Managerid not found"));
        var cityinfo=cityRepo.findById(cityid).orElseThrow(()->new RuntimeException("cityid not found"));
        var typeinfo=typesRepo.findById(typeid).orElseThrow(()->new RuntimeException("Typeid not found"));
        obj.setManagers(managerinfo);
        obj.setCity(cityinfo);
       obj.setTypes(typeinfo);
        obj.setUploadeddate(LocalDateTime.now());
       facilityRepo.save(obj);
       return new ResponseEntity<>("Facility added Successfully",HttpStatus.OK);
    }

    /* Get All Facilities based on Managerid */
    @GetMapping("/Getallfacilities/{managerid}")
    public ResponseEntity<?> Getallfacilities(@PathVariable Integer managerid)
    {
        var managerinfo=managersRepo.findById(managerid).orElseThrow(()->new RuntimeException("Manager id not found"));

       var facilitylist=facilityRepo.findByManagers(managerinfo);
        return new ResponseEntity<>(facilitylist,HttpStatus.OK);
    }

    /* Get all Facilities details  based on city and types in ffront end-(Browse Facilities) */
    @GetMapping("/Getallfacilities/{cityid}/{typeid}")
    public ResponseEntity<?>  Getallfacilities(@PathVariable Integer cityid,@PathVariable Integer typeid)
    {
        var cityinfo=cityRepo.findById(cityid).orElseThrow(()->new RuntimeException("cityid not found"));
        var typeinfo=typesRepo.findById(typeid).orElseThrow(()->new RuntimeException("Typeid not found"));

        List<Facility> facilityList = facilityRepo.findByCityAndTypes(cityinfo, typeinfo);

        if (facilityList.isEmpty()) {
            return new ResponseEntity<>("No Facility for that city and type", HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(facilityList,HttpStatus.OK);
    }

}

