package org.jsp.ecommerceapp.model;

import org.hibernate.annotations.Cache;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Address {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
private int id;
@Column(nullable =false)
private String landmark;
@Column(nullable =false)
 private String building_name;
@Column(nullable =false)
private String house_no;
@Column(nullable =false)
private String address_type;
@Column(unique=true,nullable =false)
private String city;
@Column(unique=true,nullable =false)
private String state;
@Column(unique=true,nullable =false)
private String country;
@Column(unique=true,nullable =false)
 private long pincode;

@ManyToOne
@JsonIgnore
@JoinColumn
private User user;

}
