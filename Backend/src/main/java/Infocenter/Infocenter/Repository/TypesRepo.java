package Infocenter.Infocenter.Repository;

import Infocenter.Infocenter.Entity.City;
import Infocenter.Infocenter.Entity.Types;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TypesRepo extends JpaRepository<Types,Integer>
{
    boolean existsByType(String type);

    List<Types> findByCity2(City cityinfo);
}
