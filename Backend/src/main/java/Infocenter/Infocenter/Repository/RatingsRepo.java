package Infocenter.Infocenter.Repository;

import Infocenter.Infocenter.Entity.Ratings;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RatingsRepo extends JpaRepository<Ratings,Integer> {
}
