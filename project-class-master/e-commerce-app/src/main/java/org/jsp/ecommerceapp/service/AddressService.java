package org.jsp.ecommerceapp.service;

import java.util.List;
import java.util.Optional;

import org.jsp.ecommerceapp.dao.AddressDao;
import org.jsp.ecommerceapp.dao.UserDao;
import org.jsp.ecommerceapp.dto.ResponseStructure;
import org.jsp.ecommerceapp.exception.AddressNotFoundException;
import org.jsp.ecommerceapp.exception.MerchantNotFoundException;
import org.jsp.ecommerceapp.exception.ProductNotFoundException;
import org.jsp.ecommerceapp.exception.UserNotFoundException;
import org.jsp.ecommerceapp.model.Address;
import org.jsp.ecommerceapp.model.Product;
import org.jsp.ecommerceapp.model.User;
import org.jsp.ecommerceapp.util.AccountStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import jakarta.servlet.http.HttpServletRequest;
import net.bytebuddy.utility.RandomString;
@Service
public class AddressService {
	@Autowired
	private AddressDao addressDao;
	@Autowired
	private UserDao userDao;
	
	public ResponseEntity<ResponseStructure<Address>> findById(int id) {
		ResponseStructure<Address> structure = new ResponseStructure<>();
		Optional<Address> recAddress = addressDao.findById(id);
		if (recAddress.isEmpty()) {
			throw new ProductNotFoundException("Invalid Address Id");
		}
		structure.setBody(recAddress.get());
		structure.setMessage("Address Found");
		structure.setStatusCode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<Address>>(structure, HttpStatus.OK);
	}


	public ResponseEntity<ResponseStructure<Address>> saveAddress(Address address,int user_id){
		Optional<User>recUser=userDao.findById(user_id);
		ResponseStructure<Address> structure = new ResponseStructure<>();
		if(recUser.isPresent()) {
			User user=recUser.get();
			user.getAddress().add(address);
			address.setUser(user);
			structure.setBody(addressDao.saveAddress(address));
			structure.setMessage("Address Added");
			structure.setStatusCode(HttpStatus.CREATED.value());
			return new ResponseEntity<ResponseStructure<Address>>(structure, HttpStatus.CREATED);
		}
		throw new MerchantNotFoundException("cannot add Address as User Id is Invalid");
	}

	public ResponseEntity<ResponseStructure<Address>> updateAddress(Address address) {
		ResponseStructure<Address> structure = new ResponseStructure<>();
		Optional<Address> recAddress = addressDao.findById(address.getId());
		if (recAddress.isEmpty()) {
			throw new AddressNotFoundException("cannot update address as id is inavlid");
		}
			Address dbAddress = recAddress.get();
			dbAddress.setLandmark(address.getLandmark());
			dbAddress.setBuilding_name(address.getBuilding_name());
			dbAddress.setHouse_no(address.getHouse_no());
			dbAddress.setAddress_type(address.getAddress_type());
			dbAddress.setCity(address.getCity());
			dbAddress.setState(address.getState());
			dbAddress.setCountry(address.getCountry());
			dbAddress.setPincode(address.getPincode());
			structure.setBody(addressDao.saveAddress(dbAddress));
			structure.setMessage("Address updated");
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructure<Address>>(structure, HttpStatus.ACCEPTED);
		
	}
	
	public ResponseEntity<ResponseStructure<List<Address>>> findAddressByUserId(int user_id) {
		ResponseStructure<List<Address>> structure = new ResponseStructure<>();
		List<Address> address = addressDao.findByUserId(user_id);
		if (address.isEmpty()) {
			throw new AddressNotFoundException("No address Found for entered User Id");
		}
		structure.setBody(address);
		structure.setMessage("List of Addresses for User Id");
		structure.setStatusCode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<List<Address>>>(structure, HttpStatus.OK);
	}


	public ResponseEntity<ResponseStructure<List<Address>>> findAll() {
		ResponseStructure<List<Address>> structure = new ResponseStructure<>();
		List<Address> address = addressDao.findAll();
		structure.setBody(address);
		structure.setMessage("List of address for User Id");
		structure.setStatusCode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<List<Address>>>(structure, HttpStatus.OK);
		
	}



}
