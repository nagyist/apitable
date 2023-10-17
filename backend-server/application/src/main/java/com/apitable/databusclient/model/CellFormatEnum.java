/*
 * databus-server
 * databus-server APIs
 *
 * The version of the OpenAPI document: 1.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.apitable.databusclient.model;

import java.util.Objects;
import com.google.gson.annotations.SerializedName;

import java.io.IOException;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;

/**
 * Gets or Sets CellFormatEnum
 */
@JsonAdapter(CellFormatEnum.Adapter.class)
public enum CellFormatEnum {
  
  STRING("STRING"),
  
  JSON("JSON");

  private String value;

  CellFormatEnum(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static CellFormatEnum fromValue(String value) {
    for (CellFormatEnum b : CellFormatEnum.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }

  public static class Adapter extends TypeAdapter<CellFormatEnum> {
    @Override
    public void write(final JsonWriter jsonWriter, final CellFormatEnum enumeration) throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public CellFormatEnum read(final JsonReader jsonReader) throws IOException {
      String value = jsonReader.nextString();
      return CellFormatEnum.fromValue(value);
    }
  }
}

