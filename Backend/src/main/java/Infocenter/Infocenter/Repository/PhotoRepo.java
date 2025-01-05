package Infocenter.Infocenter.Repository;

import Infocenter.Infocenter.Entity.Facility;
import Infocenter.Infocenter.Entity.Photo;
import Infocenter.Infocenter.Entity.Video;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PhotoRepo extends JpaRepository<Photo,Integer>
{
    List<Photo> findByFacility2(Facility facilityinfo);   /* Get Photos based on facility id in front end - Services */
}
