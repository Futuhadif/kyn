package com.API.KYN.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.API.KYN.entity.Store;


public interface StoreRepository extends JpaRepository<Store, Long>{

	@Query(value = "SELECT * FROM store WHERE id_user = :idUser", nativeQuery = true)
	public List<Store> findStoreByUserId(@Param("idUser") long id);
}
