package Infocenter.Infocenter.Repository;

import Infocenter.Infocenter.Entity.Guests;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface GuestsRepo extends JpaRepository<Guests,Integer>
{
    Optional<Guests> findByEmailid(String emailid);

    boolean existsByEmailid(String emailid);
}
