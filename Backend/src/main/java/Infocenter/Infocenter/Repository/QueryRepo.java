package Infocenter.Infocenter.Repository;

import Infocenter.Infocenter.Entity.Facility;
import Infocenter.Infocenter.Entity.Managers;
import Infocenter.Infocenter.Entity.Query;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QueryRepo extends JpaRepository<Query,Integer>
{

    List<Query> findByManagers11(Managers mangerinfo);

    List<Query> findByfacility10(Facility facilityinfo);

//    List<Query> findByFacility10(Object facility);
}
