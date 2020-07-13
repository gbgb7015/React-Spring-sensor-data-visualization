package com.example.sunlight.model;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

public class DataModel {
    private LocalDateTime time;
    private String temperature;
    private String humidity;
    private String brightness;
    private String movement;
    private String co2;
    private String toxicgas;

    public void setTime(LocalDateTime time) {
        this.time = time;
    }

    public String getTime() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        return Optional.ofNullable(time).map(formatter::format).orElse("");
    }

    public void setTemperature(String temperature) {
        this.temperature = temperature;
    }

    public String getTemperature() {
        return temperature;
    }

    public void setHumidity(String humidity) {
        this.humidity = humidity;
    }

    public String getHumidity() {
        return humidity;
    }

    public void setBrightness(String brightness) {
        this.brightness = brightness;
    }

    public String getBrightness() {
        return brightness;
    }

    public void setMovement(String movement) {
        this.movement = movement;
    }

    public String getMovement() {
        return movement;
    }

    public void setCo2(String co2) {
        this.co2 = co2;
    }

    public String getCo2() {
        return co2;
    }

    public void setToxicgas(String toxicgas) {
        this.toxicgas = toxicgas;
    }

    public String getToxicgas() {
        return toxicgas;
    }
}
