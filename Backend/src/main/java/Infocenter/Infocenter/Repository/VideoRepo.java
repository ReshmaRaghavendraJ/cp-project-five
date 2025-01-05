package Infocenter.Infocenter.Repository;

import Infocenter.Infocenter.Entity.Facility;
import Infocenter.Infocenter.Entity.Video;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VideoRepo extends JpaRepository<Video,Integer>
{
    List<Video> findByFacility1(Facility facilityinfo);     /* Get videos based on facility id in front end - Services */
}
