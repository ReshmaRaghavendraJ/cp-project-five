package Infocenter.Infocenter.Repository;

import Infocenter.Infocenter.Entity.Text;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TextRepo extends JpaRepository<Text,Integer>
{
}
