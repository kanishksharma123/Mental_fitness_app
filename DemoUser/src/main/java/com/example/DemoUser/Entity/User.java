package com.example.DemoUser.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "new_table")
public class User {



    @Id

    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name="name")
    private String name;
    @Column(name="email")

    private String email;
//    @Column(name = "Mood")
//    private  String Mood;
//    @Column(name = "date")
//    private String date;


}