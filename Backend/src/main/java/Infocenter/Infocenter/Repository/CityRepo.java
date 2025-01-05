package Infocenter.Infocenter.Repository;

import Infocenter.Infocenter.Entity.City;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CityRepo extends JpaRepository<City,Integer>
{
    boolean existsByCity(String city);
}
