package Infocenter.Infocenter.Repository;

import Infocenter.Infocenter.Entity.Managers;
import org.apache.catalina.Manager;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ManagersRepo extends JpaRepository<Managers,Integer>
{
  Optional <Managers> findByEmailid(String emailid);

  boolean existsByEmailid(String emailid);
}
