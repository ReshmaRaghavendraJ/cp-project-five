package Infocenter.Infocenter.Repository;


import Infocenter.Infocenter.Entity.City;
import Infocenter.Infocenter.Entity.Facility;
import Infocenter.Infocenter.Entity.Managers;
import Infocenter.Infocenter.Entity.Types;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FacilityRepo extends JpaRepository<Facility,Integer>
{
    List<Facility> findByManagers(Managers managers);  //Find by managerid

    /* Get all Facilities details  based on city and types in ffront end-(Browse Facilities) */
    @Query("SELECT f FROM Facility f WHERE f.city = :cityinfo AND f.types = :typeinfo")
    List<Facility> findByCityAndTypes(@Param("cityinfo") City cityinfo, @Param("typeinfo") Types typeinfo);

//    Object findByFacility10(Integer facilityid);
//
//    Object findByFacility_Facility10(Integer facilityid);
}
