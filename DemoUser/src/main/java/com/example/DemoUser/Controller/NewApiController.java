package com.example.DemoUser.Controller;

import com.example.DemoUser.Entity.MyData;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api") // Set a base URL path for your API
public class NewApiController {
    // Define your API endpoint methods here
    @GetMapping("/data")
    public ResponseEntity<List<Map<String, Object>>> getColorNameId() {
        List<Map<String, Object>> dataList = new ArrayList<>();

        // Add multiple sets of data to the list
        dataList.add(createData("red", "Sample Name 1", 1));
        dataList.add(createData("blue", "Sample Name 2", 2));
        dataList.add(createData("green", "Sample Name 3", 3));

        // Return the list as a JSON response
        return ResponseEntity.ok(dataList);
    }

    // Helper method to create a data map
    private Map<String, Object> createData(String color, String name, int id) {
        Map<String, Object> data = new HashMap<>();
        data.put("color", color);
        data.put("name", name);
        data.put("id", id);
        return data;
    }

    @GetMapping("/my-data")
    public ResponseEntity<List<MyData>> getMyData() {
        List<MyData> dataList = new ArrayList<>();

        // Populate dataList with your data
        dataList.add(new MyData(1, "image1.jpg", "Title 1", "Subtitle 1", true));
        dataList.add(new MyData(2, "image2.jpg", "Title 2", "Subtitle 2", false));
        dataList.add(new MyData(3, "image3.jpg", "Title 3", "Subtitle 3", true));

        return ResponseEntity.ok(dataList);
    }

}
