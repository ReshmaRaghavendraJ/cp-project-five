package Infocenter.Infocenter.Controller;

import Infocenter.Infocenter.Entity.Guests;
import Infocenter.Infocenter.Entity.Managers;
import Infocenter.Infocenter.Repository.GuestsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin("*")

public class GuestsController {
    @Autowired
    GuestsRepo guestsRepo;

    /* Guest Login Check */
    @GetMapping("/guestlogin/{emailid}/{password}")
    public ResponseEntity<?> guestlogin(@PathVariable String emailid, @PathVariable String password) {
        try {
            // Find the user by email ID
            Guests guestinfo = guestsRepo.findByEmailid(emailid).orElseThrow(() -> new RuntimeException("Email ID not found"));

            // Check if the password matches
            if (!guestinfo.getPassword().equals(password)) {
                return new ResponseEntity<>("Guest Password is incorrect", HttpStatus.UNAUTHORIZED);
            } else {
                // Return Guest info if login is successful
                return new ResponseEntity<>(guestinfo, HttpStatus.OK);
            }
        } catch (RuntimeException e) {
            // Handle errors gracefully
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        }
    }


/* Guest Registeration */
@PostMapping("/guestregister")
public ResponseEntity<?> guestregister(@RequestBody Guests obj) {
    String emailid = obj.getEmailid(); // Extract email from the object

        if(guestsRepo.existsByEmailid(obj.getEmailid()))
        {
        return new ResponseEntity<>("Emailid already exists, Give other names", HttpStatus.CONFLICT);
         }
        guestsRepo.save(obj);
    return new ResponseEntity<>("Guest Registered Successfully", HttpStatus.CREATED);
    }
}


