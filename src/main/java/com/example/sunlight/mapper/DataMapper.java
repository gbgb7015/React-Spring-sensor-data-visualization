package com.example.sunlight.mapper;

import com.example.sunlight.model.DataModel;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface DataMapper {
    public List<DataModel> selectAll();

    public List<DataModel> select_temperature();

    public List<DataModel> select_humidity();

    public List<DataModel> select_brightness();

    public List<DataModel> select_movement();

    public List<DataModel> select_co2();

    public List<DataModel> select_toxicgas();

    public void insert(DataModel dto);

    public void update(DataModel dto);

    public void delete();
}
