package com.API.KYN.service;

import java.util.List;

import com.API.KYN.entity.User;


public interface UserService {

	List<User> listUser() throws Exception;
	
	User getUserById(int id) throws Exception;
}