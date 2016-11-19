package org.techforumist.addressbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.techforumist.addressbook.domain.Address;

/**
 * @author Sarath Muraleedharan
 *
 */
public interface AddressRepository extends JpaRepository<Address, Long> {

}
