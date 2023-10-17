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
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;
import java.util.Arrays;
import org.openapitools.jackson.nullable.JsonNullable;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;
import com.google.gson.TypeAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import com.apitable.databusclient.JSON;

/**
 * AutomationRobotSO
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class AutomationRobotSO {
  public static final String SERIALIZED_NAME_DESCRIPTION = "description";
  @SerializedName(SERIALIZED_NAME_DESCRIPTION)
  private String description;

  public static final String SERIALIZED_NAME_IS_ACTIVE = "isActive";
  @SerializedName(SERIALIZED_NAME_IS_ACTIVE)
  private Integer isActive;

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_PROPS = "props";
  @SerializedName(SERIALIZED_NAME_PROPS)
  private String props;

  public static final String SERIALIZED_NAME_RECENTLY_RUN_COUNT = "recentlyRunCount";
  @SerializedName(SERIALIZED_NAME_RECENTLY_RUN_COUNT)
  private Long recentlyRunCount;

  public static final String SERIALIZED_NAME_RESOURCE_ID = "resourceId";
  @SerializedName(SERIALIZED_NAME_RESOURCE_ID)
  private String resourceId;

  public static final String SERIALIZED_NAME_ROBOT_ID = "robotId";
  @SerializedName(SERIALIZED_NAME_ROBOT_ID)
  private String robotId;

  public static final String SERIALIZED_NAME_UPDATED_AT = "updatedAt";
  @SerializedName(SERIALIZED_NAME_UPDATED_AT)
  private Long updatedAt;

  public static final String SERIALIZED_NAME_UPDATED_BY = "updatedBy";
  @SerializedName(SERIALIZED_NAME_UPDATED_BY)
  private Long updatedBy;

  public AutomationRobotSO() {
  }

  public AutomationRobotSO description(String description) {
    
    this.description = description;
    return this;
  }

   /**
   * Get description
   * @return description
  **/
  @javax.annotation.Nullable
  public String getDescription() {
    return description;
  }


  public void setDescription(String description) {
    this.description = description;
  }


  public AutomationRobotSO isActive(Integer isActive) {
    
    this.isActive = isActive;
    return this;
  }

   /**
   * Get isActive
   * minimum: 0
   * @return isActive
  **/
  @javax.annotation.Nonnull
  public Integer getIsActive() {
    return isActive;
  }


  public void setIsActive(Integer isActive) {
    this.isActive = isActive;
  }


  public AutomationRobotSO name(String name) {
    
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @javax.annotation.Nonnull
  public String getName() {
    return name;
  }


  public void setName(String name) {
    this.name = name;
  }


  public AutomationRobotSO props(String props) {
    
    this.props = props;
    return this;
  }

   /**
   * Get props
   * @return props
  **/
  @javax.annotation.Nullable
  public String getProps() {
    return props;
  }


  public void setProps(String props) {
    this.props = props;
  }


  public AutomationRobotSO recentlyRunCount(Long recentlyRunCount) {
    
    this.recentlyRunCount = recentlyRunCount;
    return this;
  }

   /**
   * Get recentlyRunCount
   * @return recentlyRunCount
  **/
  @javax.annotation.Nonnull
  public Long getRecentlyRunCount() {
    return recentlyRunCount;
  }


  public void setRecentlyRunCount(Long recentlyRunCount) {
    this.recentlyRunCount = recentlyRunCount;
  }


  public AutomationRobotSO resourceId(String resourceId) {
    
    this.resourceId = resourceId;
    return this;
  }

   /**
   * Get resourceId
   * @return resourceId
  **/
  @javax.annotation.Nonnull
  public String getResourceId() {
    return resourceId;
  }


  public void setResourceId(String resourceId) {
    this.resourceId = resourceId;
  }


  public AutomationRobotSO robotId(String robotId) {
    
    this.robotId = robotId;
    return this;
  }

   /**
   * Get robotId
   * @return robotId
  **/
  @javax.annotation.Nonnull
  public String getRobotId() {
    return robotId;
  }


  public void setRobotId(String robotId) {
    this.robotId = robotId;
  }


  public AutomationRobotSO updatedAt(Long updatedAt) {
    
    this.updatedAt = updatedAt;
    return this;
  }

   /**
   * Get updatedAt
   * @return updatedAt
  **/
  @javax.annotation.Nullable
  public Long getUpdatedAt() {
    return updatedAt;
  }


  public void setUpdatedAt(Long updatedAt) {
    this.updatedAt = updatedAt;
  }


  public AutomationRobotSO updatedBy(Long updatedBy) {
    
    this.updatedBy = updatedBy;
    return this;
  }

   /**
   * Get updatedBy
   * minimum: 0
   * @return updatedBy
  **/
  @javax.annotation.Nullable
  public Long getUpdatedBy() {
    return updatedBy;
  }


  public void setUpdatedBy(Long updatedBy) {
    this.updatedBy = updatedBy;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AutomationRobotSO automationRobotSO = (AutomationRobotSO) o;
    return Objects.equals(this.description, automationRobotSO.description) &&
        Objects.equals(this.isActive, automationRobotSO.isActive) &&
        Objects.equals(this.name, automationRobotSO.name) &&
        Objects.equals(this.props, automationRobotSO.props) &&
        Objects.equals(this.recentlyRunCount, automationRobotSO.recentlyRunCount) &&
        Objects.equals(this.resourceId, automationRobotSO.resourceId) &&
        Objects.equals(this.robotId, automationRobotSO.robotId) &&
        Objects.equals(this.updatedAt, automationRobotSO.updatedAt) &&
        Objects.equals(this.updatedBy, automationRobotSO.updatedBy);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(description, isActive, name, props, recentlyRunCount, resourceId, robotId, updatedAt, updatedBy);
  }

  private static <T> int hashCodeNullable(JsonNullable<T> a) {
    if (a == null) {
      return 1;
    }
    return a.isPresent() ? Arrays.deepHashCode(new Object[]{a.get()}) : 31;
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AutomationRobotSO {\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    isActive: ").append(toIndentedString(isActive)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    props: ").append(toIndentedString(props)).append("\n");
    sb.append("    recentlyRunCount: ").append(toIndentedString(recentlyRunCount)).append("\n");
    sb.append("    resourceId: ").append(toIndentedString(resourceId)).append("\n");
    sb.append("    robotId: ").append(toIndentedString(robotId)).append("\n");
    sb.append("    updatedAt: ").append(toIndentedString(updatedAt)).append("\n");
    sb.append("    updatedBy: ").append(toIndentedString(updatedBy)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>();
    openapiFields.add("description");
    openapiFields.add("isActive");
    openapiFields.add("name");
    openapiFields.add("props");
    openapiFields.add("recentlyRunCount");
    openapiFields.add("resourceId");
    openapiFields.add("robotId");
    openapiFields.add("updatedAt");
    openapiFields.add("updatedBy");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("isActive");
    openapiRequiredFields.add("name");
    openapiRequiredFields.add("recentlyRunCount");
    openapiRequiredFields.add("resourceId");
    openapiRequiredFields.add("robotId");
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to AutomationRobotSO
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!AutomationRobotSO.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in AutomationRobotSO is not found in the empty JSON string", AutomationRobotSO.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!AutomationRobotSO.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `AutomationRobotSO` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : AutomationRobotSO.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if ((jsonObj.get("description") != null && !jsonObj.get("description").isJsonNull()) && !jsonObj.get("description").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `description` to be a primitive type in the JSON string but got `%s`", jsonObj.get("description").toString()));
      }
      if (!jsonObj.get("name").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `name` to be a primitive type in the JSON string but got `%s`", jsonObj.get("name").toString()));
      }
      if ((jsonObj.get("props") != null && !jsonObj.get("props").isJsonNull()) && !jsonObj.get("props").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `props` to be a primitive type in the JSON string but got `%s`", jsonObj.get("props").toString()));
      }
      if (!jsonObj.get("resourceId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `resourceId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("resourceId").toString()));
      }
      if (!jsonObj.get("robotId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `robotId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("robotId").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!AutomationRobotSO.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'AutomationRobotSO' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<AutomationRobotSO> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(AutomationRobotSO.class));

       return (TypeAdapter<T>) new TypeAdapter<AutomationRobotSO>() {
           @Override
           public void write(JsonWriter out, AutomationRobotSO value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public AutomationRobotSO read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of AutomationRobotSO given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of AutomationRobotSO
  * @throws IOException if the JSON string is invalid with respect to AutomationRobotSO
  */
  public static AutomationRobotSO fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, AutomationRobotSO.class);
  }

 /**
  * Convert an instance of AutomationRobotSO to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

