// ParkingController.java
package com.example.parking;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class ParkingController {

    @GetMapping("/api/parkingSlots")
    public List<ParkingSlot> getParkingSlots() {
        return Arrays.asList(
            new ParkingSlot(1, "Downtown", true, 28.6139, 77.2090),
            new ParkingSlot(2, "Uptown", true, 28.7041, 77.1025),
            new ParkingSlot(3, "Airport", false, 28.5562, 77.1000),
            new ParkingSlot(4, "Train Station", true, 28.6139, 77.2090)
        );
    }
}

class ParkingSlot {
    private int id;
    private String location;
    private boolean available;
    private double latitude;
    private double longitude;

    public ParkingSlot(int id, String location, boolean available, double latitude, double longitude) {
        this.id = id;
        this.location = location;
        this.available = available;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    // Getters and setters omitted for brevity
}