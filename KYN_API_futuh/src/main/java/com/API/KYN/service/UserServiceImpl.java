package com.API.KYN.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.API.KYN.entity.User;
import com.API.KYN.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private PasswordEncoder encodedPassword;

	@Override
	public List<User> listUser() throws Exception {
	List<User> listAll = userRepo.findAll();
		return listAll;
	}

	@Override
	public User getUserById(int id) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Transactional
	public String save(User user) {
		String pw = encodedPassword.encode(user.getPassword());
		user.setPassword(pw);
		userRepo.save(user);
		return "User registered successfully with ID : " + user.getIdUser();
	}
	
}
