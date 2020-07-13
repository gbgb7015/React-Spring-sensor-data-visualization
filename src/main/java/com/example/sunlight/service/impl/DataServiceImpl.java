package com.example.sunlight.service.impl;

import com.example.sunlight.mapper.DataMapper;
import com.example.sunlight.model.DataModel;
import com.example.sunlight.service.DataService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class DataServiceImpl implements DataService {
    @Resource
    DataMapper dataMapper;

    @Override
    public List<DataModel> selectAll() {
        return dataMapper.selectAll();
    }

    @Override
    public List<DataModel> select_temperature() {
        return dataMapper.select_temperature();
    }

    @Override
    public List<DataModel> select_humidity() {
        return dataMapper.select_humidity();
    }

    @Override
    public List<DataModel> select_brightness() {
        return dataMapper.select_brightness();
    }

    @Override
    public List<DataModel> select_movement() {
        return dataMapper.select_movement();
    }

    @Override
    public List<DataModel> select_co2() {
        return dataMapper.select_co2();
    }

    @Override
    public List<DataModel> select_toxicgas() {
        return dataMapper.select_toxicgas();
    }

    @Override
    public void insert(DataModel dto) {
        dataMapper.insert(dto);
    }

    @Override
    public void update(DataModel dto) {
        dataMapper.update(dto);
    }

    @Override
    public void delete() {
        dataMapper.delete();
    }
}
