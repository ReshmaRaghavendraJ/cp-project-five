package Infocenter.Infocenter.Repository;

import Infocenter.Infocenter.Entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminRepo extends JpaRepository<Admin,Integer>
{
    Optional<Admin> findByEmailid(String emailid);
}
