package com.example.sunlight.controller;

import com.example.sunlight.model.DataModel;
import com.example.sunlight.service.DataService;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class DataController {
    private final DataService dataService;

    public DataController(DataService dataService) {
        this.dataService = dataService;
    }

    @RequestMapping(value = "/json", method = RequestMethod.GET)
    public @ResponseBody
    List<DataModel> selectList(){
        return dataService.selectAll();
    }

    @RequestMapping(value = "/json1", method = RequestMethod.GET)
    public @ResponseBody
    List<DataModel> select_temperature(){
        return dataService.select_temperature();
    }
    @RequestMapping(value = "/json2", method = RequestMethod.GET)
    public @ResponseBody
    List<DataModel> select_humidity(){
        return dataService.select_humidity();
    }
    @RequestMapping(value = "/json3", method = RequestMethod.GET)
    public @ResponseBody
    List<DataModel> select_brightness(){
        return dataService.select_brightness();
    }

    @RequestMapping(value = "/json4", method = RequestMethod.GET)
    public @ResponseBody
    List<DataModel> select_movement(){
        return dataService.select_movement();
    }

    @RequestMapping(value = "/json5", method = RequestMethod.GET)
    public @ResponseBody
    List<DataModel> select_co2(){
        return dataService.select_co2();
    }

    @RequestMapping(value = "/json6", method = RequestMethod.GET)
    public @ResponseBody
    List<DataModel> select_toxicgas(){
        return dataService.select_toxicgas();
    }

}
