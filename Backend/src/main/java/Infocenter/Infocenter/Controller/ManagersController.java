package Infocenter.Infocenter.Controller;

import Infocenter.Infocenter.Entity.Guests;
import Infocenter.Infocenter.Entity.Managers;
import Infocenter.Infocenter.Repository.ManagersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class ManagersController {
    @Autowired
    ManagersRepo managersRepo;

    /* Add Managers */
    @PostMapping("/AddManagers")
    public ResponseEntity<?> AddManagers(@RequestBody Managers obj) {
        //String emailid=obj.getEmailid();
        if(managersRepo.existsByEmailid(obj.getEmailid()))
        {
            return new ResponseEntity<>("Emailid already exists,give other name",HttpStatus.CONFLICT);
        }
        managersRepo.save(obj);
        return new ResponseEntity<>("Manager details added successfully", HttpStatus.OK);
    }

    /* Login Manager */
    @GetMapping("/managerlogin/{emailid}/{password}")
    public ResponseEntity<?> managerlogin(@PathVariable String emailid, @PathVariable String password) {
        try {
            // Find the Manager by email ID
            Managers managerinfo = managersRepo.findByEmailid(emailid).orElseThrow(() -> new RuntimeException("Email ID not found"));

            // Check if the password matches
            if (!managerinfo.getPassword().equals(password)) {
                return new ResponseEntity<>("Manager Password is incorrect", HttpStatus.UNAUTHORIZED);
            } else {
                // Return user info if login is successful
                return new ResponseEntity<>(managerinfo, HttpStatus.OK);
            }
        } catch (RuntimeException e) {
            // Handle errors gracefully
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        }
    }



/* Get All Manager list */
    @GetMapping("getallmanagers")
    public ResponseEntity<?> getallmanagers() {
        List<Managers> managerlist = managersRepo.findAll();
        return new ResponseEntity<>(managerlist, HttpStatus.OK);
    }

}
