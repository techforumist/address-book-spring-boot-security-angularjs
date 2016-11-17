package org.techforumist.addressbook.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.techforumist.addressbook.domain.Address;
import org.techforumist.addressbook.repository.AddressRepository;

@RestController
public class AddressRestController {
	@Autowired
	private AddressRepository addressRepository;

	@RequestMapping(value = "/address", method = RequestMethod.GET)
	public List<Address> address() {
		return addressRepository.findAll();
	}

	@RequestMapping(value = "/address/{id}", method = RequestMethod.GET)
	public ResponseEntity<Address> addressById(@PathVariable Long id) {
		Address address = addressRepository.findOne(id);
		if (address == null) {
			return new ResponseEntity<Address>(HttpStatus.NO_CONTENT);
		} else {
			return new ResponseEntity<Address>(address, HttpStatus.OK);
		}

	}

	@RequestMapping(value = "/address/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Address> deleteAddress(@PathVariable Long id) {
		Address address = addressRepository.findOne(id);
		if (address == null) {
			return new ResponseEntity<Address>(HttpStatus.NO_CONTENT);
		} else {
			addressRepository.delete(address);
			return new ResponseEntity<Address>(address, HttpStatus.OK);
		}

	}

	@RequestMapping(value = "/address", method = RequestMethod.POST)
	public ResponseEntity<Address> createAddress(@RequestBody Address address) {
		return new ResponseEntity<Address>(addressRepository.save(address), HttpStatus.CREATED);
	}

	@RequestMapping(value = "/address", method = RequestMethod.PUT)
	public Address updateAddress(@RequestBody Address address) {
		return addressRepository.save(address);
	}

}
