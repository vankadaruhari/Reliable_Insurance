
Ext.define("xcp_RootBO",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_RootBO_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs/template"
      },
      "fields" : [ {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("relyins_recent_activity",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/relyins_recent_activitys"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "activity_type",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("relyins_recent_activity_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/relyins_recent_activitys/template"
      },
      "fields" : [ {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "activity_type",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("relyins_customer",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/relyins_customers"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "customer_id",
        "type" : "string"
      }, {
        "name" : "first_name",
        "type" : "string"
      }, {
        "name" : "last_name",
        "type" : "string"
      }, {
        "name" : "birth_date",
        "type" : "string"
      }, {
        "name" : "street",
        "type" : "string"
      }, {
        "name" : "zip",
        "type" : "string"
      }, {
        "name" : "city",
        "type" : "string"
      }, {
        "name" : "state",
        "type" : "string"
      }, {
        "name" : "risk",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "driver_license",
        "type" : "string"
      }, {
        "name" : "email",
        "type" : "string"
      }, {
        "name" : "occupation",
        "type" : "string"
      }, {
        "name" : "ssn",
        "type" : "string"
      }, {
        "name" : "phone",
        "type" : "string"
      }, {
        "name" : "had_accident",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "had_insurance_declined",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "had_license_revoked",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "had_moving_violation",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "had_mental_impairments",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "vehicles_make",
        "type" : "array"
      }, {
        "name" : "vehicles_model",
        "type" : "array"
      }, {
        "name" : "bodily_injury",
        "type" : "array"
      }, {
        "name" : "property_damage",
        "type" : "array"
      }, {
        "name" : "medical_payments",
        "type" : "array"
      }, {
        "name" : "comprehensive",
        "type" : "array"
      }, {
        "name" : "collision",
        "type" : "array"
      }, {
        "name" : "telematic_1",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "telematic_2",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "telematic_3",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "telematic_4",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "telematic_5",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("relyins_customer_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/relyins_customers/template"
      },
      "fields" : [ {
        "name" : "customer_id",
        "type" : "string"
      }, {
        "name" : "first_name",
        "type" : "string"
      }, {
        "name" : "last_name",
        "type" : "string"
      }, {
        "name" : "birth_date",
        "type" : "string"
      }, {
        "name" : "street",
        "type" : "string"
      }, {
        "name" : "zip",
        "type" : "string"
      }, {
        "name" : "city",
        "type" : "string"
      }, {
        "name" : "state",
        "type" : "string"
      }, {
        "name" : "risk",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "driver_license",
        "type" : "string"
      }, {
        "name" : "email",
        "type" : "string"
      }, {
        "name" : "occupation",
        "type" : "string"
      }, {
        "name" : "ssn",
        "type" : "string"
      }, {
        "name" : "phone",
        "type" : "string"
      }, {
        "name" : "had_accident",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "had_insurance_declined",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "had_license_revoked",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "had_moving_violation",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "had_mental_impairments",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "vehicles_make",
        "type" : "array"
      }, {
        "name" : "vehicles_model",
        "type" : "array"
      }, {
        "name" : "bodily_injury",
        "type" : "array"
      }, {
        "name" : "property_damage",
        "type" : "array"
      }, {
        "name" : "medical_payments",
        "type" : "array"
      }, {
        "name" : "comprehensive",
        "type" : "array"
      }, {
        "name" : "collision",
        "type" : "array"
      }, {
        "name" : "telematic_1",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "telematic_2",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "telematic_3",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "telematic_4",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "telematic_5",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("relyins_manufacturer",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/relyins_manufacturers"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("relyins_manufacturer_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/relyins_manufacturers/template"
      },
      "fields" : [ {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("relyins_vehicle",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/relyins_vehicles"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "make",
        "type" : "string"
      }, {
        "name" : "model",
        "type" : "string"
      }, {
        "name" : "rating",
        "type" : "string"
      }, {
        "name" : "year",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "msrp",
        "useNull" : true,
        "type" : "float"
      }, {
        "name" : "body_type",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("relyins_vehicle_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/relyins_vehicles/template"
      },
      "fields" : [ {
        "name" : "make",
        "type" : "string"
      }, {
        "name" : "model",
        "type" : "string"
      }, {
        "name" : "rating",
        "type" : "string"
      }, {
        "name" : "year",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "msrp",
        "useNull" : true,
        "type" : "float"
      }, {
        "name" : "body_type",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_dm_folder",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_folder_path",
        "type" : "array"
      }, {
        "name" : "r_link_cnt",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      }, "links" ]
    }
);

Ext.define("xcp_folderlist_0",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest_folder",
        "url" : "application/xcp_dm_folders"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_folder_path",
        "type" : "array"
      }, {
        "name" : "r_link_cnt",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      }, {
        "name" : "icon",
        "type" : "string"
      }, "links" ]
    }
);

Ext.define("relyins_policy",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/relyins_policys"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "bodily_injury",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "property_damage",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "medical_payments",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "comprehensive",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "collision",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "deductible",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "total_coverage",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "monthly_payment",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "monthly_payment_float",
        "useNull" : true,
        "type" : "float"
      }, {
        "name" : "approval",
        "type" : "string"
      }, {
        "name" : "owner_name",
        "type" : "string"
      }, {
        "name" : "a_status",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "i_chronicle_id",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      }, "links" ]
    }
);

Ext.define("relyins_application_form",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/relyins_application_forms"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "owner_name",
        "type" : "string"
      }, {
        "name" : "a_status",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "i_chronicle_id",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      }, "links" ]
    }
);

Ext.define("xcp_dm_document",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "owner_name",
        "type" : "string"
      }, {
        "name" : "a_status",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "i_chronicle_id",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      }, "links" ]
    }
);

Ext.define("xcp_currenttask",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "act_name",
        "type" : "string"
      }, {
        "name" : "qitem_id",
        "type" : "string"
      }, {
        "name" : "creation_date",
        "type" : "string"
      }, {
        "name" : "due_date",
        "type" : "string"
      }, {
        "name" : "performer",
        "type" : "string"
      }, {
        "name" : "performer_address",
        "type" : "string"
      }, {
        "name" : "priority",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "state",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "name",
        "type" : "string"
      }, {
        "name" : "task_subject",
        "type" : "string"
      }, {
        "name" : "queue_name",
        "type" : "string"
      }, {
        "name" : "instructions",
        "type" : "string"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "received_date",
        "type" : "string"
      }, {
        "name" : "received_from",
        "type" : "string"
      }, {
        "name" : "requirements",
        "type" : "string"
      }, {
        "name" : "isdelegable",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "isrepeatable",
        "useNull" : true,
        "type" : "boolean"
      } ]
    }
);

Ext.define("xcp_taskworkflow",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "correlation_identifier",
        "type" : "string"
      }, {
        "name" : "process_id",
        "type" : "string"
      }, {
        "name" : "r_creater_name",
        "type" : "string"
      }, {
        "name" : "r_start_date",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "r_runtime_state",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "supervisor_name",
        "type" : "string"
      }, {
        "name" : "supervisor_address",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_ExecutionData",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "currenttask",
        "type" : "xcp_currenttask"
      }, {
        "name" : "taskworkflow",
        "type" : "xcp_taskworkflow"
      } ]
    }
);

Ext.define("relyins_report_manager_agen_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "agent_name",
        "type" : "string"
      }, {
        "name" : "categories",
        "type" : "array"
      }, {
        "name" : "customers",
        "type" : "array"
      }, {
        "name" : "policies",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_report_manager_agen_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_report_manager_agen_initiate_processVariables"
      } ]
    }
);

Ext.define("xcp_queue_list_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "queuelist",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_queue_list_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_queue_list_initiate_processVariables"
      } ]
    }
);

Ext.define("relyins_report_manager_perf_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "performance",
        "type" : "array"
      }, {
        "name" : "plan",
        "type" : "array"
      }, {
        "name" : "quarters",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_report_manager_perf_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_report_manager_perf_initiate_processVariables"
      } ]
    }
);

Ext.define("xcp_activity_list_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "act_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "output_activity_names",
        "type" : "array"
      }, {
        "name" : "port_type",
        "type" : "string"
      }, {
        "name" : "process_id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_activity_list_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_activity_list_initiate_processVariables"
      } ]
    }
);

Ext.define("relyins_update_risk_assessm_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "customer_id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_update_risk_assessm_initiate_processPackages",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "customer",
        "type" : "relyins_customer_template"
      } ]
    }
);

Ext.define("relyins_update_risk_assessm_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
            "customer" : {
            }
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_update_risk_assessm_initiate_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "relyins_update_risk_assessm_initiate_processPackages"
      } ]
    }
);

Ext.define("relyins_report_manager_cust_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "data",
        "type" : "array"
      }, {
        "name" : "labels",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_report_manager_cust_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_report_manager_cust_initiate_processVariables"
      } ]
    }
);

Ext.define("relyins_related_policy_info_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "approval",
        "type" : "string"
      }, {
        "name" : "body",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "collision",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "comprehensive",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "coverage",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "deductible",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "medical",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "payment",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "payment_float",
        "useNull" : true,
        "type" : "float"
      }, {
        "name" : "policy_id",
        "type" : "string"
      }, {
        "name" : "property",
        "useNull" : true,
        "type" : "boolean"
      } ]
    }
);

Ext.define("relyins_related_policy_info_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
            "body" : "false",
            "medical" : "false",
            "comprehensive" : "false",
            "property" : "false",
            "collision" : "false"
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_related_policy_info_initiate_processVariables"
      } ]
    }
);

Ext.define("relyins_report_manager_top__initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "agents",
        "type" : "array"
      }, {
        "name" : "new_customers",
        "type" : "array"
      }, {
        "name" : "new_policies",
        "type" : "array"
      }, {
        "name" : "policies_existing",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_report_manager_top__initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_report_manager_top__initiate_processVariables"
      } ]
    }
);

Ext.define("xcp_user_from_queue_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "queue_name",
        "type" : "string"
      }, {
        "name" : "user_list",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_user_from_queue_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_user_from_queue_initiate_processVariables"
      } ]
    }
);

Ext.define("xcp_taskhistory_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "activity_name",
        "type" : "array"
      }, {
        "name" : "date",
        "type" : "array"
      }, {
        "name" : "performer",
        "type" : "array"
      }, {
        "name" : "process_instance_id",
        "type" : "string"
      }, {
        "name" : "status",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_taskhistory_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_taskhistory_initiate_processVariables"
      } ]
    }
);

Ext.define("relyins_update_telematic_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "customer_id",
        "type" : "string"
      }, {
        "name" : "telematic_1",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "telematic_2",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "telematic_3",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "telematic_4",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "telematic_5",
        "useNull" : true,
        "type" : "int"
      } ]
    }
);

Ext.define("relyins_update_telematic_initiate_processPackages",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "customer",
        "type" : "relyins_customer_template"
      } ]
    }
);

Ext.define("relyins_update_telematic_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
            "customer" : {
            }
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_update_telematic_initiate_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "relyins_update_telematic_initiate_processPackages"
      } ]
    }
);

Ext.define("relyins_report_average_time_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "average_time",
        "useNull" : true,
        "type" : "float"
      } ]
    }
);

Ext.define("relyins_report_average_time_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_report_average_time_initiate_processVariables"
      } ]
    }
);

Ext.define("relyins_new_application_review_application_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "license",
        "type" : "string"
      }, {
        "name" : "mileage",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "new_vehicle",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "vin",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_new_application_review_application_processPackages",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "application_form",
        "type" : "relyins_application_form"
      }, {
        "name" : "customer",
        "type" : "relyins_customer"
      }, {
        "name" : "policy",
        "type" : "relyins_policy"
      }, {
        "name" : "vehicle",
        "type" : "relyins_vehicle"
      } ]
    }
);

Ext.define("relyins_new_application_review_application",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/tasks",
        "extraParams" : {
          "type" : "new_application_review_application"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_new_application_review_application_processVariables"
      }, {
        "name" : "executionData",
        "type" : "xcp_ExecutionData"
      }, {
        "name" : "processPackages",
        "type" : "relyins_new_application_review_application_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_new_application_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "license",
        "type" : "string"
      }, {
        "name" : "mileage",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "new_vehicle",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "vin",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_new_application_initiate_processPackages",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "customer",
        "type" : "relyins_customer_template"
      }, {
        "name" : "vehicle",
        "type" : "relyins_vehicle_template"
      } ]
    }
);

Ext.define("relyins_new_application_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
            "vehicle" : {
            },
            "customer" : {
            }
          },
          "processVariables" : {
            "new_vehicle" : "false"
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_new_application_initiate_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "relyins_new_application_initiate_processPackages"
      } ]
    }
);

Ext.define("relyins_new_application_approve_or_reject_a_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "license",
        "type" : "string"
      }, {
        "name" : "mileage",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "new_vehicle",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "vin",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_new_application_approve_or_reject_a_processPackages",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "application_form",
        "type" : "relyins_application_form"
      }, {
        "name" : "customer",
        "type" : "relyins_customer"
      }, {
        "name" : "policy",
        "type" : "relyins_policy"
      }, {
        "name" : "vehicle",
        "type" : "relyins_vehicle"
      } ]
    }
);

Ext.define("relyins_new_application_approve_or_reject_a",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/tasks",
        "extraParams" : {
          "type" : "new_application_approve_or_reject_a"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_new_application_approve_or_reject_a_processVariables"
      }, {
        "name" : "executionData",
        "type" : "xcp_ExecutionData"
      }, {
        "name" : "processPackages",
        "type" : "relyins_new_application_approve_or_reject_a_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_report_policy_types_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "number_of_policies",
        "type" : "array"
      }, {
        "name" : "types_of_policies",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_report_policy_types_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_report_policy_types_initiate_processVariables"
      } ]
    }
);

Ext.define("xcp_userorgroup_selecti_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "user_group_name",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_userorgroup_selecti_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_userorgroup_selecti_processVariables"
      } ]
    }
);

Ext.define("relyins_report_customers_ad_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "average_customers",
        "type" : "array"
      }, {
        "name" : "days",
        "type" : "array"
      }, {
        "name" : "your_customers",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_report_customers_ad_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_report_customers_ad_initiate_processVariables"
      } ]
    }
);

Ext.define("relyins_send_customer_notif_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "from",
        "type" : "string"
      }, {
        "name" : "to",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_send_customer_notif_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_send_customer_notif_initiate_processVariables"
      } ]
    }
);

Ext.define("relyins_report_manager_ag_1_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "agent_name",
        "type" : "string"
      }, {
        "name" : "categories",
        "type" : "array"
      }, {
        "name" : "customers",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_report_manager_ag_1_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_report_manager_ag_1_initiate_processVariables"
      } ]
    }
);

Ext.define("relyins_report_manager_ag_2_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "agent_name",
        "type" : "string"
      }, {
        "name" : "categories",
        "type" : "array"
      }, {
        "name" : "policies",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_report_manager_ag_2_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_report_manager_ag_2_initiate_processVariables"
      } ]
    }
);

Ext.define("relyins_create_policy_objec_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "body",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "collision",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "comprehensive",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "coverage",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "customer_id",
        "type" : "string"
      }, {
        "name" : "deductible",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "medical",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "payment",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "policy_id",
        "type" : "string"
      }, {
        "name" : "property",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "vehicle_id",
        "type" : "string"
      }, {
        "name" : "vehicle_name",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_create_policy_objec_initiate_processPackages",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "customer",
        "type" : "relyins_customer_template"
      } ]
    }
);

Ext.define("relyins_create_policy_objec_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
            "customer" : {
            }
          },
          "processVariables" : {
            "body" : "false",
            "medical" : "false",
            "comprehensive" : "false",
            "property" : "false",
            "collision" : "false"
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_create_policy_objec_initiate_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "relyins_create_policy_objec_initiate_processPackages"
      } ]
    }
);

Ext.define("relyins_send_telematic_emai_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "from",
        "type" : "string"
      }, {
        "name" : "to",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_send_telematic_emai_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
            "to" : "dmadmin@vlab.local",
            "from" : "dmadmin@vlab.local"
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_send_telematic_emai_initiate_processVariables"
      } ]
    }
);

Ext.define("relyins_create_recent_activ_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "activity_desc",
        "type" : "string"
      }, {
        "name" : "activity_type",
        "type" : "string"
      }, {
        "name" : "customer_obj_id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_create_recent_activ_initiate_processPackages",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "recent_activity",
        "type" : "relyins_recent_activity_template"
      } ]
    }
);

Ext.define("relyins_create_recent_activ_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
            "recent_activity" : {
            }
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_create_recent_activ_initiate_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "relyins_create_recent_activ_initiate_processPackages"
      } ]
    }
);

Ext.define("relyins_da_def_create_report_manager_ag_2_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "agent_name",
        "type" : "string"
      }, {
        "name" : "categories",
        "type" : "array"
      }, {
        "name" : "policies",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_da_def_create_report_manager_ag_2_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_report_manager_ag_2",
        "extraParams" : {
          "type" : "relyins_da_def_create_report_manager_ag_2_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_da_def_create_report_manager_ag_2_initiate_processVariables"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_da_def_repeat_new_application_manual_task_application_form",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_repeat_new_application_manual_task_customer",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "birth_date",
        "type" : "string"
      }, {
        "name" : "bodily_injury",
        "type" : "array"
      }, {
        "name" : "city",
        "type" : "string"
      }, {
        "name" : "collision",
        "type" : "array"
      }, {
        "name" : "comprehensive",
        "type" : "array"
      }, {
        "name" : "customer_id",
        "type" : "string"
      }, {
        "name" : "driver_license",
        "type" : "string"
      }, {
        "name" : "email",
        "type" : "string"
      }, {
        "name" : "first_name",
        "type" : "string"
      }, {
        "name" : "had_accident",
        "type" : "boolean"
      }, {
        "name" : "had_insurance_declined",
        "type" : "boolean"
      }, {
        "name" : "had_license_revoked",
        "type" : "boolean"
      }, {
        "name" : "had_mental_impairments",
        "type" : "boolean"
      }, {
        "name" : "had_moving_violation",
        "type" : "boolean"
      }, {
        "name" : "last_name",
        "type" : "string"
      }, {
        "name" : "medical_payments",
        "type" : "array"
      }, {
        "name" : "occupation",
        "type" : "string"
      }, {
        "name" : "phone",
        "type" : "string"
      }, {
        "name" : "property_damage",
        "type" : "array"
      }, {
        "name" : "risk",
        "type" : "int"
      }, {
        "name" : "ssn",
        "type" : "string"
      }, {
        "name" : "state",
        "type" : "string"
      }, {
        "name" : "street",
        "type" : "string"
      }, {
        "name" : "telematic_1",
        "type" : "int"
      }, {
        "name" : "telematic_2",
        "type" : "int"
      }, {
        "name" : "telematic_3",
        "type" : "int"
      }, {
        "name" : "telematic_4",
        "type" : "int"
      }, {
        "name" : "telematic_5",
        "type" : "int"
      }, {
        "name" : "vehicles_make",
        "type" : "array"
      }, {
        "name" : "vehicles_model",
        "type" : "array"
      }, {
        "name" : "zip",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_repeat_new_application_manual_task_policy",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "approval",
        "type" : "string"
      }, {
        "name" : "bodily_injury",
        "type" : "boolean"
      }, {
        "name" : "collision",
        "type" : "boolean"
      }, {
        "name" : "comprehensive",
        "type" : "boolean"
      }, {
        "name" : "deductible",
        "type" : "int"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "medical_payments",
        "type" : "boolean"
      }, {
        "name" : "monthly_payment",
        "type" : "int"
      }, {
        "name" : "monthly_payment_float",
        "type" : "float"
      }, {
        "name" : "property_damage",
        "type" : "boolean"
      }, {
        "name" : "total_coverage",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_repeat_new_application_manual_task_vehicle",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "body_type",
        "type" : "string"
      }, {
        "name" : "make",
        "type" : "string"
      }, {
        "name" : "model",
        "type" : "string"
      }, {
        "name" : "msrp",
        "type" : "float"
      }, {
        "name" : "rating",
        "type" : "string"
      }, {
        "name" : "year",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_repeat_new_application_manual_task_processPackages",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "application_form",
        "type" : "relyins_da_def_repeat_new_application_manual_task_application_form"
      }, {
        "name" : "customer",
        "type" : "relyins_da_def_repeat_new_application_manual_task_customer"
      }, {
        "name" : "policy",
        "type" : "relyins_da_def_repeat_new_application_manual_task_policy"
      }, {
        "name" : "vehicle",
        "type" : "relyins_da_def_repeat_new_application_manual_task_vehicle"
      } ]
    }
);

Ext.define("relyins_da_def_repeat_new_application_manual_task_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "license",
        "type" : "string"
      }, {
        "name" : "mileage",
        "type" : "int"
      }, {
        "name" : "new_vehicle",
        "type" : "boolean"
      }, {
        "name" : "vin",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_repeat_new_application_manual_task",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks/{id}/repeat",
        "extraParams" : {
          "type" : "relyins_da_def_repeat_new_application_manual_task"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_da_def_repeat_new_application_manual_task_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "relyins_da_def_repeat_new_application_manual_task_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "userName",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_da_def_complete_new_application_manual_task_application_form",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_complete_new_application_manual_task_customer",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "birth_date",
        "type" : "string"
      }, {
        "name" : "bodily_injury",
        "type" : "array"
      }, {
        "name" : "city",
        "type" : "string"
      }, {
        "name" : "collision",
        "type" : "array"
      }, {
        "name" : "comprehensive",
        "type" : "array"
      }, {
        "name" : "customer_id",
        "type" : "string"
      }, {
        "name" : "driver_license",
        "type" : "string"
      }, {
        "name" : "email",
        "type" : "string"
      }, {
        "name" : "first_name",
        "type" : "string"
      }, {
        "name" : "had_accident",
        "type" : "boolean"
      }, {
        "name" : "had_insurance_declined",
        "type" : "boolean"
      }, {
        "name" : "had_license_revoked",
        "type" : "boolean"
      }, {
        "name" : "had_mental_impairments",
        "type" : "boolean"
      }, {
        "name" : "had_moving_violation",
        "type" : "boolean"
      }, {
        "name" : "last_name",
        "type" : "string"
      }, {
        "name" : "medical_payments",
        "type" : "array"
      }, {
        "name" : "occupation",
        "type" : "string"
      }, {
        "name" : "phone",
        "type" : "string"
      }, {
        "name" : "property_damage",
        "type" : "array"
      }, {
        "name" : "risk",
        "type" : "int"
      }, {
        "name" : "ssn",
        "type" : "string"
      }, {
        "name" : "state",
        "type" : "string"
      }, {
        "name" : "street",
        "type" : "string"
      }, {
        "name" : "telematic_1",
        "type" : "int"
      }, {
        "name" : "telematic_2",
        "type" : "int"
      }, {
        "name" : "telematic_3",
        "type" : "int"
      }, {
        "name" : "telematic_4",
        "type" : "int"
      }, {
        "name" : "telematic_5",
        "type" : "int"
      }, {
        "name" : "vehicles_make",
        "type" : "array"
      }, {
        "name" : "vehicles_model",
        "type" : "array"
      }, {
        "name" : "zip",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_complete_new_application_manual_task_policy",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "approval",
        "type" : "string"
      }, {
        "name" : "bodily_injury",
        "type" : "boolean"
      }, {
        "name" : "collision",
        "type" : "boolean"
      }, {
        "name" : "comprehensive",
        "type" : "boolean"
      }, {
        "name" : "deductible",
        "type" : "int"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "medical_payments",
        "type" : "boolean"
      }, {
        "name" : "monthly_payment",
        "type" : "int"
      }, {
        "name" : "monthly_payment_float",
        "type" : "float"
      }, {
        "name" : "property_damage",
        "type" : "boolean"
      }, {
        "name" : "total_coverage",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_complete_new_application_manual_task_vehicle",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "body_type",
        "type" : "string"
      }, {
        "name" : "make",
        "type" : "string"
      }, {
        "name" : "model",
        "type" : "string"
      }, {
        "name" : "msrp",
        "type" : "float"
      }, {
        "name" : "rating",
        "type" : "string"
      }, {
        "name" : "year",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_complete_new_application_manual_task_processPackages",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "application_form",
        "type" : "relyins_da_def_complete_new_application_manual_task_application_form"
      }, {
        "name" : "customer",
        "type" : "relyins_da_def_complete_new_application_manual_task_customer"
      }, {
        "name" : "policy",
        "type" : "relyins_da_def_complete_new_application_manual_task_policy"
      }, {
        "name" : "vehicle",
        "type" : "relyins_da_def_complete_new_application_manual_task_vehicle"
      } ]
    }
);

Ext.define("relyins_da_def_complete_new_application_manual_task_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "license",
        "type" : "string"
      }, {
        "name" : "mileage",
        "type" : "int"
      }, {
        "name" : "new_vehicle",
        "type" : "boolean"
      }, {
        "name" : "vin",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_complete_new_application_manual_task",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks/{id}/complete",
        "extraParams" : {
          "type" : "relyins_da_def_complete_new_application_manual_task"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_da_def_complete_new_application_manual_task_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "relyins_da_def_complete_new_application_manual_task_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_delegate_new_application_manual_task_application_form",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_delegate_new_application_manual_task_customer",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "birth_date",
        "type" : "string"
      }, {
        "name" : "bodily_injury",
        "type" : "array"
      }, {
        "name" : "city",
        "type" : "string"
      }, {
        "name" : "collision",
        "type" : "array"
      }, {
        "name" : "comprehensive",
        "type" : "array"
      }, {
        "name" : "customer_id",
        "type" : "string"
      }, {
        "name" : "driver_license",
        "type" : "string"
      }, {
        "name" : "email",
        "type" : "string"
      }, {
        "name" : "first_name",
        "type" : "string"
      }, {
        "name" : "had_accident",
        "type" : "boolean"
      }, {
        "name" : "had_insurance_declined",
        "type" : "boolean"
      }, {
        "name" : "had_license_revoked",
        "type" : "boolean"
      }, {
        "name" : "had_mental_impairments",
        "type" : "boolean"
      }, {
        "name" : "had_moving_violation",
        "type" : "boolean"
      }, {
        "name" : "last_name",
        "type" : "string"
      }, {
        "name" : "medical_payments",
        "type" : "array"
      }, {
        "name" : "occupation",
        "type" : "string"
      }, {
        "name" : "phone",
        "type" : "string"
      }, {
        "name" : "property_damage",
        "type" : "array"
      }, {
        "name" : "risk",
        "type" : "int"
      }, {
        "name" : "ssn",
        "type" : "string"
      }, {
        "name" : "state",
        "type" : "string"
      }, {
        "name" : "street",
        "type" : "string"
      }, {
        "name" : "telematic_1",
        "type" : "int"
      }, {
        "name" : "telematic_2",
        "type" : "int"
      }, {
        "name" : "telematic_3",
        "type" : "int"
      }, {
        "name" : "telematic_4",
        "type" : "int"
      }, {
        "name" : "telematic_5",
        "type" : "int"
      }, {
        "name" : "vehicles_make",
        "type" : "array"
      }, {
        "name" : "vehicles_model",
        "type" : "array"
      }, {
        "name" : "zip",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_delegate_new_application_manual_task_policy",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "approval",
        "type" : "string"
      }, {
        "name" : "bodily_injury",
        "type" : "boolean"
      }, {
        "name" : "collision",
        "type" : "boolean"
      }, {
        "name" : "comprehensive",
        "type" : "boolean"
      }, {
        "name" : "deductible",
        "type" : "int"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "medical_payments",
        "type" : "boolean"
      }, {
        "name" : "monthly_payment",
        "type" : "int"
      }, {
        "name" : "monthly_payment_float",
        "type" : "float"
      }, {
        "name" : "property_damage",
        "type" : "boolean"
      }, {
        "name" : "total_coverage",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_delegate_new_application_manual_task_vehicle",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "body_type",
        "type" : "string"
      }, {
        "name" : "make",
        "type" : "string"
      }, {
        "name" : "model",
        "type" : "string"
      }, {
        "name" : "msrp",
        "type" : "float"
      }, {
        "name" : "rating",
        "type" : "string"
      }, {
        "name" : "year",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_delegate_new_application_manual_task_processPackages",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "application_form",
        "type" : "relyins_da_def_delegate_new_application_manual_task_application_form"
      }, {
        "name" : "customer",
        "type" : "relyins_da_def_delegate_new_application_manual_task_customer"
      }, {
        "name" : "policy",
        "type" : "relyins_da_def_delegate_new_application_manual_task_policy"
      }, {
        "name" : "vehicle",
        "type" : "relyins_da_def_delegate_new_application_manual_task_vehicle"
      } ]
    }
);

Ext.define("relyins_da_def_delegate_new_application_manual_task_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "license",
        "type" : "string"
      }, {
        "name" : "mileage",
        "type" : "int"
      }, {
        "name" : "new_vehicle",
        "type" : "boolean"
      }, {
        "name" : "vin",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_delegate_new_application_manual_task",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks/{id}/delegate",
        "extraParams" : {
          "type" : "relyins_da_def_delegate_new_application_manual_task"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_da_def_delegate_new_application_manual_task_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "relyins_da_def_delegate_new_application_manual_task_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "userName",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_da_def_update_new_application_manual_task_application_form",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_update_new_application_manual_task_customer",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "birth_date",
        "type" : "string"
      }, {
        "name" : "bodily_injury",
        "type" : "array"
      }, {
        "name" : "city",
        "type" : "string"
      }, {
        "name" : "collision",
        "type" : "array"
      }, {
        "name" : "comprehensive",
        "type" : "array"
      }, {
        "name" : "customer_id",
        "type" : "string"
      }, {
        "name" : "driver_license",
        "type" : "string"
      }, {
        "name" : "email",
        "type" : "string"
      }, {
        "name" : "first_name",
        "type" : "string"
      }, {
        "name" : "had_accident",
        "type" : "boolean"
      }, {
        "name" : "had_insurance_declined",
        "type" : "boolean"
      }, {
        "name" : "had_license_revoked",
        "type" : "boolean"
      }, {
        "name" : "had_mental_impairments",
        "type" : "boolean"
      }, {
        "name" : "had_moving_violation",
        "type" : "boolean"
      }, {
        "name" : "last_name",
        "type" : "string"
      }, {
        "name" : "medical_payments",
        "type" : "array"
      }, {
        "name" : "occupation",
        "type" : "string"
      }, {
        "name" : "phone",
        "type" : "string"
      }, {
        "name" : "property_damage",
        "type" : "array"
      }, {
        "name" : "risk",
        "type" : "int"
      }, {
        "name" : "ssn",
        "type" : "string"
      }, {
        "name" : "state",
        "type" : "string"
      }, {
        "name" : "street",
        "type" : "string"
      }, {
        "name" : "telematic_1",
        "type" : "int"
      }, {
        "name" : "telematic_2",
        "type" : "int"
      }, {
        "name" : "telematic_3",
        "type" : "int"
      }, {
        "name" : "telematic_4",
        "type" : "int"
      }, {
        "name" : "telematic_5",
        "type" : "int"
      }, {
        "name" : "vehicles_make",
        "type" : "array"
      }, {
        "name" : "vehicles_model",
        "type" : "array"
      }, {
        "name" : "zip",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_update_new_application_manual_task_policy",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "approval",
        "type" : "string"
      }, {
        "name" : "bodily_injury",
        "type" : "boolean"
      }, {
        "name" : "collision",
        "type" : "boolean"
      }, {
        "name" : "comprehensive",
        "type" : "boolean"
      }, {
        "name" : "deductible",
        "type" : "int"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "medical_payments",
        "type" : "boolean"
      }, {
        "name" : "monthly_payment",
        "type" : "int"
      }, {
        "name" : "monthly_payment_float",
        "type" : "float"
      }, {
        "name" : "property_damage",
        "type" : "boolean"
      }, {
        "name" : "total_coverage",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_update_new_application_manual_task_vehicle",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "body_type",
        "type" : "string"
      }, {
        "name" : "make",
        "type" : "string"
      }, {
        "name" : "model",
        "type" : "string"
      }, {
        "name" : "msrp",
        "type" : "float"
      }, {
        "name" : "rating",
        "type" : "string"
      }, {
        "name" : "year",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_update_new_application_manual_task_processPackages",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "application_form",
        "type" : "relyins_da_def_update_new_application_manual_task_application_form"
      }, {
        "name" : "customer",
        "type" : "relyins_da_def_update_new_application_manual_task_customer"
      }, {
        "name" : "policy",
        "type" : "relyins_da_def_update_new_application_manual_task_policy"
      }, {
        "name" : "vehicle",
        "type" : "relyins_da_def_update_new_application_manual_task_vehicle"
      } ]
    }
);

Ext.define("relyins_da_def_update_new_application_manual_task_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "license",
        "type" : "string"
      }, {
        "name" : "mileage",
        "type" : "int"
      }, {
        "name" : "new_vehicle",
        "type" : "boolean"
      }, {
        "name" : "vin",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_update_new_application_manual_task",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks/{id}/update",
        "extraParams" : {
          "type" : "relyins_da_def_update_new_application_manual_task"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_da_def_update_new_application_manual_task_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "relyins_da_def_update_new_application_manual_task_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_create_new_application_initiate_application_form",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_create_new_application_initiate_customer",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "birth_date",
        "type" : "string"
      }, {
        "name" : "bodily_injury",
        "type" : "array"
      }, {
        "name" : "city",
        "type" : "string"
      }, {
        "name" : "collision",
        "type" : "array"
      }, {
        "name" : "comprehensive",
        "type" : "array"
      }, {
        "name" : "customer_id",
        "type" : "string"
      }, {
        "name" : "driver_license",
        "type" : "string"
      }, {
        "name" : "email",
        "type" : "string"
      }, {
        "name" : "first_name",
        "type" : "string"
      }, {
        "name" : "had_accident",
        "type" : "boolean"
      }, {
        "name" : "had_insurance_declined",
        "type" : "boolean"
      }, {
        "name" : "had_license_revoked",
        "type" : "boolean"
      }, {
        "name" : "had_mental_impairments",
        "type" : "boolean"
      }, {
        "name" : "had_moving_violation",
        "type" : "boolean"
      }, {
        "name" : "last_name",
        "type" : "string"
      }, {
        "name" : "medical_payments",
        "type" : "array"
      }, {
        "name" : "occupation",
        "type" : "string"
      }, {
        "name" : "phone",
        "type" : "string"
      }, {
        "name" : "property_damage",
        "type" : "array"
      }, {
        "name" : "risk",
        "type" : "int"
      }, {
        "name" : "ssn",
        "type" : "string"
      }, {
        "name" : "state",
        "type" : "string"
      }, {
        "name" : "street",
        "type" : "string"
      }, {
        "name" : "telematic_1",
        "type" : "int"
      }, {
        "name" : "telematic_2",
        "type" : "int"
      }, {
        "name" : "telematic_3",
        "type" : "int"
      }, {
        "name" : "telematic_4",
        "type" : "int"
      }, {
        "name" : "telematic_5",
        "type" : "int"
      }, {
        "name" : "vehicles_make",
        "type" : "array"
      }, {
        "name" : "vehicles_model",
        "type" : "array"
      }, {
        "name" : "zip",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_create_new_application_initiate_policy",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_create_new_application_initiate_vehicle",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "body_type",
        "type" : "string"
      }, {
        "name" : "make",
        "type" : "string"
      }, {
        "name" : "model",
        "type" : "string"
      }, {
        "name" : "msrp",
        "type" : "float"
      }, {
        "name" : "rating",
        "type" : "string"
      }, {
        "name" : "year",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_create_new_application_initiate_processPackages",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "application_form",
        "type" : "relyins_da_def_create_new_application_initiate_application_form"
      }, {
        "name" : "customer",
        "type" : "relyins_da_def_create_new_application_initiate_customer"
      }, {
        "name" : "policy",
        "type" : "relyins_da_def_create_new_application_initiate_policy"
      }, {
        "name" : "vehicle",
        "type" : "relyins_da_def_create_new_application_initiate_vehicle"
      } ]
    }
);

Ext.define("relyins_da_def_create_new_application_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "license",
        "type" : "string"
      }, {
        "name" : "mileage",
        "type" : "int"
      }, {
        "name" : "new_vehicle",
        "type" : "boolean"
      }, {
        "name" : "vin",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_create_new_application_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_new_application",
        "extraParams" : {
          "type" : "relyins_da_def_create_new_application_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_da_def_create_new_application_initiate_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "relyins_da_def_create_new_application_initiate_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_da_def_update_new_application_manual_task_1_1_application_form",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_update_new_application_manual_task_1_1_customer",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "birth_date",
        "type" : "string"
      }, {
        "name" : "bodily_injury",
        "type" : "array"
      }, {
        "name" : "city",
        "type" : "string"
      }, {
        "name" : "collision",
        "type" : "array"
      }, {
        "name" : "comprehensive",
        "type" : "array"
      }, {
        "name" : "customer_id",
        "type" : "string"
      }, {
        "name" : "driver_license",
        "type" : "string"
      }, {
        "name" : "email",
        "type" : "string"
      }, {
        "name" : "first_name",
        "type" : "string"
      }, {
        "name" : "had_accident",
        "type" : "boolean"
      }, {
        "name" : "had_insurance_declined",
        "type" : "boolean"
      }, {
        "name" : "had_license_revoked",
        "type" : "boolean"
      }, {
        "name" : "had_mental_impairments",
        "type" : "boolean"
      }, {
        "name" : "had_moving_violation",
        "type" : "boolean"
      }, {
        "name" : "last_name",
        "type" : "string"
      }, {
        "name" : "medical_payments",
        "type" : "array"
      }, {
        "name" : "occupation",
        "type" : "string"
      }, {
        "name" : "phone",
        "type" : "string"
      }, {
        "name" : "property_damage",
        "type" : "array"
      }, {
        "name" : "risk",
        "type" : "int"
      }, {
        "name" : "ssn",
        "type" : "string"
      }, {
        "name" : "state",
        "type" : "string"
      }, {
        "name" : "street",
        "type" : "string"
      }, {
        "name" : "telematic_1",
        "type" : "int"
      }, {
        "name" : "telematic_2",
        "type" : "int"
      }, {
        "name" : "telematic_3",
        "type" : "int"
      }, {
        "name" : "telematic_4",
        "type" : "int"
      }, {
        "name" : "telematic_5",
        "type" : "int"
      }, {
        "name" : "vehicles_make",
        "type" : "array"
      }, {
        "name" : "vehicles_model",
        "type" : "array"
      }, {
        "name" : "zip",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_update_new_application_manual_task_1_1_policy",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "approval",
        "type" : "string"
      }, {
        "name" : "bodily_injury",
        "type" : "boolean"
      }, {
        "name" : "collision",
        "type" : "boolean"
      }, {
        "name" : "comprehensive",
        "type" : "boolean"
      }, {
        "name" : "deductible",
        "type" : "int"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "medical_payments",
        "type" : "boolean"
      }, {
        "name" : "monthly_payment",
        "type" : "int"
      }, {
        "name" : "monthly_payment_float",
        "type" : "float"
      }, {
        "name" : "property_damage",
        "type" : "boolean"
      }, {
        "name" : "total_coverage",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_update_new_application_manual_task_1_1_vehicle",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "body_type",
        "type" : "string"
      }, {
        "name" : "make",
        "type" : "string"
      }, {
        "name" : "model",
        "type" : "string"
      }, {
        "name" : "msrp",
        "type" : "float"
      }, {
        "name" : "rating",
        "type" : "string"
      }, {
        "name" : "year",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_update_new_application_manual_task_1_1_processPackages",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "application_form",
        "type" : "relyins_da_def_update_new_application_manual_task_1_1_application_form"
      }, {
        "name" : "customer",
        "type" : "relyins_da_def_update_new_application_manual_task_1_1_customer"
      }, {
        "name" : "policy",
        "type" : "relyins_da_def_update_new_application_manual_task_1_1_policy"
      }, {
        "name" : "vehicle",
        "type" : "relyins_da_def_update_new_application_manual_task_1_1_vehicle"
      } ]
    }
);

Ext.define("relyins_da_def_update_new_application_manual_task_1_1_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "license",
        "type" : "string"
      }, {
        "name" : "mileage",
        "type" : "int"
      }, {
        "name" : "new_vehicle",
        "type" : "boolean"
      }, {
        "name" : "vin",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_update_new_application_manual_task_1_1",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks/{id}/update",
        "extraParams" : {
          "type" : "relyins_da_def_update_new_application_manual_task_1_1"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_da_def_update_new_application_manual_task_1_1_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "relyins_da_def_update_new_application_manual_task_1_1_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_repeat_new_application_manual_task_1_1_application_form",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_repeat_new_application_manual_task_1_1_customer",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "birth_date",
        "type" : "string"
      }, {
        "name" : "bodily_injury",
        "type" : "array"
      }, {
        "name" : "city",
        "type" : "string"
      }, {
        "name" : "collision",
        "type" : "array"
      }, {
        "name" : "comprehensive",
        "type" : "array"
      }, {
        "name" : "customer_id",
        "type" : "string"
      }, {
        "name" : "driver_license",
        "type" : "string"
      }, {
        "name" : "email",
        "type" : "string"
      }, {
        "name" : "first_name",
        "type" : "string"
      }, {
        "name" : "had_accident",
        "type" : "boolean"
      }, {
        "name" : "had_insurance_declined",
        "type" : "boolean"
      }, {
        "name" : "had_license_revoked",
        "type" : "boolean"
      }, {
        "name" : "had_mental_impairments",
        "type" : "boolean"
      }, {
        "name" : "had_moving_violation",
        "type" : "boolean"
      }, {
        "name" : "last_name",
        "type" : "string"
      }, {
        "name" : "medical_payments",
        "type" : "array"
      }, {
        "name" : "occupation",
        "type" : "string"
      }, {
        "name" : "phone",
        "type" : "string"
      }, {
        "name" : "property_damage",
        "type" : "array"
      }, {
        "name" : "risk",
        "type" : "int"
      }, {
        "name" : "ssn",
        "type" : "string"
      }, {
        "name" : "state",
        "type" : "string"
      }, {
        "name" : "street",
        "type" : "string"
      }, {
        "name" : "telematic_1",
        "type" : "int"
      }, {
        "name" : "telematic_2",
        "type" : "int"
      }, {
        "name" : "telematic_3",
        "type" : "int"
      }, {
        "name" : "telematic_4",
        "type" : "int"
      }, {
        "name" : "telematic_5",
        "type" : "int"
      }, {
        "name" : "vehicles_make",
        "type" : "array"
      }, {
        "name" : "vehicles_model",
        "type" : "array"
      }, {
        "name" : "zip",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_repeat_new_application_manual_task_1_1_policy",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "approval",
        "type" : "string"
      }, {
        "name" : "bodily_injury",
        "type" : "boolean"
      }, {
        "name" : "collision",
        "type" : "boolean"
      }, {
        "name" : "comprehensive",
        "type" : "boolean"
      }, {
        "name" : "deductible",
        "type" : "int"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "medical_payments",
        "type" : "boolean"
      }, {
        "name" : "monthly_payment",
        "type" : "int"
      }, {
        "name" : "monthly_payment_float",
        "type" : "float"
      }, {
        "name" : "property_damage",
        "type" : "boolean"
      }, {
        "name" : "total_coverage",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_repeat_new_application_manual_task_1_1_vehicle",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "body_type",
        "type" : "string"
      }, {
        "name" : "make",
        "type" : "string"
      }, {
        "name" : "model",
        "type" : "string"
      }, {
        "name" : "msrp",
        "type" : "float"
      }, {
        "name" : "rating",
        "type" : "string"
      }, {
        "name" : "year",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_repeat_new_application_manual_task_1_1_processPackages",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "application_form",
        "type" : "relyins_da_def_repeat_new_application_manual_task_1_1_application_form"
      }, {
        "name" : "customer",
        "type" : "relyins_da_def_repeat_new_application_manual_task_1_1_customer"
      }, {
        "name" : "policy",
        "type" : "relyins_da_def_repeat_new_application_manual_task_1_1_policy"
      }, {
        "name" : "vehicle",
        "type" : "relyins_da_def_repeat_new_application_manual_task_1_1_vehicle"
      } ]
    }
);

Ext.define("relyins_da_def_repeat_new_application_manual_task_1_1_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "license",
        "type" : "string"
      }, {
        "name" : "mileage",
        "type" : "int"
      }, {
        "name" : "new_vehicle",
        "type" : "boolean"
      }, {
        "name" : "vin",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_repeat_new_application_manual_task_1_1",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks/{id}/repeat",
        "extraParams" : {
          "type" : "relyins_da_def_repeat_new_application_manual_task_1_1"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_da_def_repeat_new_application_manual_task_1_1_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "relyins_da_def_repeat_new_application_manual_task_1_1_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "userName",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_da_def_delegate_new_application_manual_task_1_1_application_form",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_delegate_new_application_manual_task_1_1_customer",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "birth_date",
        "type" : "string"
      }, {
        "name" : "bodily_injury",
        "type" : "array"
      }, {
        "name" : "city",
        "type" : "string"
      }, {
        "name" : "collision",
        "type" : "array"
      }, {
        "name" : "comprehensive",
        "type" : "array"
      }, {
        "name" : "customer_id",
        "type" : "string"
      }, {
        "name" : "driver_license",
        "type" : "string"
      }, {
        "name" : "email",
        "type" : "string"
      }, {
        "name" : "first_name",
        "type" : "string"
      }, {
        "name" : "had_accident",
        "type" : "boolean"
      }, {
        "name" : "had_insurance_declined",
        "type" : "boolean"
      }, {
        "name" : "had_license_revoked",
        "type" : "boolean"
      }, {
        "name" : "had_mental_impairments",
        "type" : "boolean"
      }, {
        "name" : "had_moving_violation",
        "type" : "boolean"
      }, {
        "name" : "last_name",
        "type" : "string"
      }, {
        "name" : "medical_payments",
        "type" : "array"
      }, {
        "name" : "occupation",
        "type" : "string"
      }, {
        "name" : "phone",
        "type" : "string"
      }, {
        "name" : "property_damage",
        "type" : "array"
      }, {
        "name" : "risk",
        "type" : "int"
      }, {
        "name" : "ssn",
        "type" : "string"
      }, {
        "name" : "state",
        "type" : "string"
      }, {
        "name" : "street",
        "type" : "string"
      }, {
        "name" : "telematic_1",
        "type" : "int"
      }, {
        "name" : "telematic_2",
        "type" : "int"
      }, {
        "name" : "telematic_3",
        "type" : "int"
      }, {
        "name" : "telematic_4",
        "type" : "int"
      }, {
        "name" : "telematic_5",
        "type" : "int"
      }, {
        "name" : "vehicles_make",
        "type" : "array"
      }, {
        "name" : "vehicles_model",
        "type" : "array"
      }, {
        "name" : "zip",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_delegate_new_application_manual_task_1_1_policy",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "approval",
        "type" : "string"
      }, {
        "name" : "bodily_injury",
        "type" : "boolean"
      }, {
        "name" : "collision",
        "type" : "boolean"
      }, {
        "name" : "comprehensive",
        "type" : "boolean"
      }, {
        "name" : "deductible",
        "type" : "int"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "medical_payments",
        "type" : "boolean"
      }, {
        "name" : "monthly_payment",
        "type" : "int"
      }, {
        "name" : "monthly_payment_float",
        "type" : "float"
      }, {
        "name" : "property_damage",
        "type" : "boolean"
      }, {
        "name" : "total_coverage",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_delegate_new_application_manual_task_1_1_vehicle",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "body_type",
        "type" : "string"
      }, {
        "name" : "make",
        "type" : "string"
      }, {
        "name" : "model",
        "type" : "string"
      }, {
        "name" : "msrp",
        "type" : "float"
      }, {
        "name" : "rating",
        "type" : "string"
      }, {
        "name" : "year",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_delegate_new_application_manual_task_1_1_processPackages",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "application_form",
        "type" : "relyins_da_def_delegate_new_application_manual_task_1_1_application_form"
      }, {
        "name" : "customer",
        "type" : "relyins_da_def_delegate_new_application_manual_task_1_1_customer"
      }, {
        "name" : "policy",
        "type" : "relyins_da_def_delegate_new_application_manual_task_1_1_policy"
      }, {
        "name" : "vehicle",
        "type" : "relyins_da_def_delegate_new_application_manual_task_1_1_vehicle"
      } ]
    }
);

Ext.define("relyins_da_def_delegate_new_application_manual_task_1_1_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "license",
        "type" : "string"
      }, {
        "name" : "mileage",
        "type" : "int"
      }, {
        "name" : "new_vehicle",
        "type" : "boolean"
      }, {
        "name" : "vin",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_delegate_new_application_manual_task_1_1",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks/{id}/delegate",
        "extraParams" : {
          "type" : "relyins_da_def_delegate_new_application_manual_task_1_1"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_da_def_delegate_new_application_manual_task_1_1_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "relyins_da_def_delegate_new_application_manual_task_1_1_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "userName",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_da_def_complete_new_application_manual_task_1_1_application_form",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_complete_new_application_manual_task_1_1_customer",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "birth_date",
        "type" : "string"
      }, {
        "name" : "bodily_injury",
        "type" : "array"
      }, {
        "name" : "city",
        "type" : "string"
      }, {
        "name" : "collision",
        "type" : "array"
      }, {
        "name" : "comprehensive",
        "type" : "array"
      }, {
        "name" : "customer_id",
        "type" : "string"
      }, {
        "name" : "driver_license",
        "type" : "string"
      }, {
        "name" : "email",
        "type" : "string"
      }, {
        "name" : "first_name",
        "type" : "string"
      }, {
        "name" : "had_accident",
        "type" : "boolean"
      }, {
        "name" : "had_insurance_declined",
        "type" : "boolean"
      }, {
        "name" : "had_license_revoked",
        "type" : "boolean"
      }, {
        "name" : "had_mental_impairments",
        "type" : "boolean"
      }, {
        "name" : "had_moving_violation",
        "type" : "boolean"
      }, {
        "name" : "last_name",
        "type" : "string"
      }, {
        "name" : "medical_payments",
        "type" : "array"
      }, {
        "name" : "occupation",
        "type" : "string"
      }, {
        "name" : "phone",
        "type" : "string"
      }, {
        "name" : "property_damage",
        "type" : "array"
      }, {
        "name" : "risk",
        "type" : "int"
      }, {
        "name" : "ssn",
        "type" : "string"
      }, {
        "name" : "state",
        "type" : "string"
      }, {
        "name" : "street",
        "type" : "string"
      }, {
        "name" : "telematic_1",
        "type" : "int"
      }, {
        "name" : "telematic_2",
        "type" : "int"
      }, {
        "name" : "telematic_3",
        "type" : "int"
      }, {
        "name" : "telematic_4",
        "type" : "int"
      }, {
        "name" : "telematic_5",
        "type" : "int"
      }, {
        "name" : "vehicles_make",
        "type" : "array"
      }, {
        "name" : "vehicles_model",
        "type" : "array"
      }, {
        "name" : "zip",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_complete_new_application_manual_task_1_1_policy",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "approval",
        "type" : "string"
      }, {
        "name" : "bodily_injury",
        "type" : "boolean"
      }, {
        "name" : "collision",
        "type" : "boolean"
      }, {
        "name" : "comprehensive",
        "type" : "boolean"
      }, {
        "name" : "deductible",
        "type" : "int"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "medical_payments",
        "type" : "boolean"
      }, {
        "name" : "monthly_payment",
        "type" : "int"
      }, {
        "name" : "monthly_payment_float",
        "type" : "float"
      }, {
        "name" : "property_damage",
        "type" : "boolean"
      }, {
        "name" : "total_coverage",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_complete_new_application_manual_task_1_1_vehicle",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "body_type",
        "type" : "string"
      }, {
        "name" : "make",
        "type" : "string"
      }, {
        "name" : "model",
        "type" : "string"
      }, {
        "name" : "msrp",
        "type" : "float"
      }, {
        "name" : "rating",
        "type" : "string"
      }, {
        "name" : "year",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_complete_new_application_manual_task_1_1_processPackages",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "application_form",
        "type" : "relyins_da_def_complete_new_application_manual_task_1_1_application_form"
      }, {
        "name" : "customer",
        "type" : "relyins_da_def_complete_new_application_manual_task_1_1_customer"
      }, {
        "name" : "policy",
        "type" : "relyins_da_def_complete_new_application_manual_task_1_1_policy"
      }, {
        "name" : "vehicle",
        "type" : "relyins_da_def_complete_new_application_manual_task_1_1_vehicle"
      } ]
    }
);

Ext.define("relyins_da_def_complete_new_application_manual_task_1_1_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "license",
        "type" : "string"
      }, {
        "name" : "mileage",
        "type" : "int"
      }, {
        "name" : "new_vehicle",
        "type" : "boolean"
      }, {
        "name" : "vin",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_complete_new_application_manual_task_1_1",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks/{id}/complete",
        "extraParams" : {
          "type" : "relyins_da_def_complete_new_application_manual_task_1_1"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_da_def_complete_new_application_manual_task_1_1_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "relyins_da_def_complete_new_application_manual_task_1_1_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_create_create_policy_objec_initiate_customer",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "birth_date",
        "type" : "string"
      }, {
        "name" : "bodily_injury",
        "type" : "array"
      }, {
        "name" : "city",
        "type" : "string"
      }, {
        "name" : "collision",
        "type" : "array"
      }, {
        "name" : "comprehensive",
        "type" : "array"
      }, {
        "name" : "customer_id",
        "type" : "string"
      }, {
        "name" : "driver_license",
        "type" : "string"
      }, {
        "name" : "email",
        "type" : "string"
      }, {
        "name" : "first_name",
        "type" : "string"
      }, {
        "name" : "had_accident",
        "type" : "boolean"
      }, {
        "name" : "had_insurance_declined",
        "type" : "boolean"
      }, {
        "name" : "had_license_revoked",
        "type" : "boolean"
      }, {
        "name" : "had_mental_impairments",
        "type" : "boolean"
      }, {
        "name" : "had_moving_violation",
        "type" : "boolean"
      }, {
        "name" : "last_name",
        "type" : "string"
      }, {
        "name" : "medical_payments",
        "type" : "array"
      }, {
        "name" : "occupation",
        "type" : "string"
      }, {
        "name" : "phone",
        "type" : "string"
      }, {
        "name" : "property_damage",
        "type" : "array"
      }, {
        "name" : "risk",
        "type" : "int"
      }, {
        "name" : "ssn",
        "type" : "string"
      }, {
        "name" : "state",
        "type" : "string"
      }, {
        "name" : "street",
        "type" : "string"
      }, {
        "name" : "telematic_1",
        "type" : "int"
      }, {
        "name" : "telematic_2",
        "type" : "int"
      }, {
        "name" : "telematic_3",
        "type" : "int"
      }, {
        "name" : "telematic_4",
        "type" : "int"
      }, {
        "name" : "telematic_5",
        "type" : "int"
      }, {
        "name" : "vehicles_make",
        "type" : "array"
      }, {
        "name" : "vehicles_model",
        "type" : "array"
      }, {
        "name" : "zip",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_create_create_policy_objec_initiate_processPackages",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "customer",
        "type" : "relyins_da_def_create_create_policy_objec_initiate_customer"
      } ]
    }
);

Ext.define("relyins_da_def_create_create_policy_objec_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "body",
        "type" : "boolean"
      }, {
        "name" : "collision",
        "type" : "boolean"
      }, {
        "name" : "comprehensive",
        "type" : "boolean"
      }, {
        "name" : "coverage",
        "type" : "int"
      }, {
        "name" : "customer_id",
        "type" : "string"
      }, {
        "name" : "deductible",
        "type" : "int"
      }, {
        "name" : "medical",
        "type" : "boolean"
      }, {
        "name" : "payment",
        "type" : "int"
      }, {
        "name" : "policy_id",
        "type" : "string"
      }, {
        "name" : "property",
        "type" : "boolean"
      }, {
        "name" : "vehicle_id",
        "type" : "string"
      }, {
        "name" : "vehicle_name",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_create_create_policy_objec_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_create_policy_objec",
        "extraParams" : {
          "type" : "relyins_da_def_create_create_policy_objec_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_da_def_create_create_policy_objec_initiate_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "relyins_da_def_create_create_policy_objec_initiate_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_da_def_create_report_manager_ag_1_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "agent_name",
        "type" : "string"
      }, {
        "name" : "categories",
        "type" : "array"
      }, {
        "name" : "customers",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_da_def_create_report_manager_ag_1_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_report_manager_ag_1",
        "extraParams" : {
          "type" : "relyins_da_def_create_report_manager_ag_1_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_da_def_create_report_manager_ag_1_initiate_processVariables"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_da_def_create_update_risk_assessm_initiate_customer",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "birth_date",
        "type" : "string"
      }, {
        "name" : "bodily_injury",
        "type" : "array"
      }, {
        "name" : "city",
        "type" : "string"
      }, {
        "name" : "collision",
        "type" : "array"
      }, {
        "name" : "comprehensive",
        "type" : "array"
      }, {
        "name" : "customer_id",
        "type" : "string"
      }, {
        "name" : "driver_license",
        "type" : "string"
      }, {
        "name" : "email",
        "type" : "string"
      }, {
        "name" : "first_name",
        "type" : "string"
      }, {
        "name" : "had_accident",
        "type" : "boolean"
      }, {
        "name" : "had_insurance_declined",
        "type" : "boolean"
      }, {
        "name" : "had_license_revoked",
        "type" : "boolean"
      }, {
        "name" : "had_mental_impairments",
        "type" : "boolean"
      }, {
        "name" : "had_moving_violation",
        "type" : "boolean"
      }, {
        "name" : "last_name",
        "type" : "string"
      }, {
        "name" : "medical_payments",
        "type" : "array"
      }, {
        "name" : "occupation",
        "type" : "string"
      }, {
        "name" : "phone",
        "type" : "string"
      }, {
        "name" : "property_damage",
        "type" : "array"
      }, {
        "name" : "risk",
        "type" : "int"
      }, {
        "name" : "ssn",
        "type" : "string"
      }, {
        "name" : "state",
        "type" : "string"
      }, {
        "name" : "street",
        "type" : "string"
      }, {
        "name" : "telematic_1",
        "type" : "int"
      }, {
        "name" : "telematic_2",
        "type" : "int"
      }, {
        "name" : "telematic_3",
        "type" : "int"
      }, {
        "name" : "telematic_4",
        "type" : "int"
      }, {
        "name" : "telematic_5",
        "type" : "int"
      }, {
        "name" : "vehicles_make",
        "type" : "array"
      }, {
        "name" : "vehicles_model",
        "type" : "array"
      }, {
        "name" : "zip",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_create_update_risk_assessm_initiate_processPackages",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "customer",
        "type" : "relyins_da_def_create_update_risk_assessm_initiate_customer"
      } ]
    }
);

Ext.define("relyins_da_def_create_update_risk_assessm_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "customer_id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_create_update_risk_assessm_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_update_risk_assessm",
        "extraParams" : {
          "type" : "relyins_da_def_create_update_risk_assessm_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_da_def_create_update_risk_assessm_initiate_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "relyins_da_def_create_update_risk_assessm_initiate_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_da_def_invoke_stateless_processupdate_risk_assessm_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_update_risk_assessm",
        "extraParams" : {
          "type" : "stateless"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "customer_id",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_invoke_stateless_processsend_customer_notif_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_send_customer_notif",
        "extraParams" : {
          "type" : "stateless"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "from",
        "type" : "string"
      }, {
        "name" : "to",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_create_send_customer_notif_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "from",
        "type" : "string"
      }, {
        "name" : "to",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_create_send_customer_notif_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_send_customer_notif",
        "extraParams" : {
          "type" : "relyins_da_def_create_send_customer_notif_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_da_def_create_send_customer_notif_initiate_processVariables"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_da_def_create_report_manager_perf_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "performance",
        "type" : "array"
      }, {
        "name" : "plan",
        "type" : "array"
      }, {
        "name" : "quarters",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_da_def_create_report_manager_perf_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_report_manager_perf",
        "extraParams" : {
          "type" : "relyins_da_def_create_report_manager_perf_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_da_def_create_report_manager_perf_initiate_processVariables"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_da_def_create_report_manager_top__initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "agents",
        "type" : "array"
      }, {
        "name" : "new_customers",
        "type" : "array"
      }, {
        "name" : "new_policies",
        "type" : "array"
      }, {
        "name" : "policies_existing",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_da_def_create_report_manager_top__initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_report_manager_top_",
        "extraParams" : {
          "type" : "relyins_da_def_create_report_manager_top__initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_da_def_create_report_manager_top__initiate_processVariables"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_da_def_create_send_telematic_emai_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "from",
        "type" : "string"
      }, {
        "name" : "to",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_create_send_telematic_emai_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_send_telematic_emai",
        "extraParams" : {
          "type" : "relyins_da_def_create_send_telematic_emai_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_da_def_create_send_telematic_emai_initiate_processVariables"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_da_def_invoke_stateless_processsend_telematic_emai_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_send_telematic_emai",
        "extraParams" : {
          "type" : "stateless"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "from",
        "type" : "string"
      }, {
        "name" : "to",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_create_create_recent_activ_initiate_recent_activity",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "activity_type",
        "type" : "string"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_create_create_recent_activ_initiate_processPackages",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "recent_activity",
        "type" : "relyins_da_def_create_create_recent_activ_initiate_recent_activity"
      } ]
    }
);

Ext.define("relyins_da_def_create_create_recent_activ_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "activity_desc",
        "type" : "string"
      }, {
        "name" : "activity_type",
        "type" : "string"
      }, {
        "name" : "customer_obj_id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_create_create_recent_activ_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_create_recent_activ",
        "extraParams" : {
          "type" : "relyins_da_def_create_create_recent_activ_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_da_def_create_create_recent_activ_initiate_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "relyins_da_def_create_create_recent_activ_initiate_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_da_def_invoke_stateless_processcreate_recent_activ_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_create_recent_activ",
        "extraParams" : {
          "type" : "stateless"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "activity_desc",
        "type" : "string"
      }, {
        "name" : "customer_obj_id",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_create_report_manager_agen_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "agent_name",
        "type" : "string"
      }, {
        "name" : "categories",
        "type" : "array"
      }, {
        "name" : "customers",
        "type" : "array"
      }, {
        "name" : "policies",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_da_def_create_report_manager_agen_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_report_manager_agen",
        "extraParams" : {
          "type" : "relyins_da_def_create_report_manager_agen_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_da_def_create_report_manager_agen_initiate_processVariables"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_da_def_create_report_policy_types_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "number_of_policies",
        "type" : "array"
      }, {
        "name" : "types_of_policies",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_da_def_create_report_policy_types_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_report_policy_types",
        "extraParams" : {
          "type" : "relyins_da_def_create_report_policy_types_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_da_def_create_report_policy_types_initiate_processVariables"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_da_def_create_report_average_time_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "average_time",
        "type" : "float"
      } ]
    }
);

Ext.define("relyins_da_def_create_report_average_time_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_report_average_time",
        "extraParams" : {
          "type" : "relyins_da_def_create_report_average_time_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_da_def_create_report_average_time_initiate_processVariables"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_da_def_create_update_telematic_initiate_customer",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "birth_date",
        "type" : "string"
      }, {
        "name" : "bodily_injury",
        "type" : "array"
      }, {
        "name" : "city",
        "type" : "string"
      }, {
        "name" : "collision",
        "type" : "array"
      }, {
        "name" : "comprehensive",
        "type" : "array"
      }, {
        "name" : "customer_id",
        "type" : "string"
      }, {
        "name" : "driver_license",
        "type" : "string"
      }, {
        "name" : "email",
        "type" : "string"
      }, {
        "name" : "first_name",
        "type" : "string"
      }, {
        "name" : "had_accident",
        "type" : "boolean"
      }, {
        "name" : "had_insurance_declined",
        "type" : "boolean"
      }, {
        "name" : "had_license_revoked",
        "type" : "boolean"
      }, {
        "name" : "had_mental_impairments",
        "type" : "boolean"
      }, {
        "name" : "had_moving_violation",
        "type" : "boolean"
      }, {
        "name" : "last_name",
        "type" : "string"
      }, {
        "name" : "medical_payments",
        "type" : "array"
      }, {
        "name" : "occupation",
        "type" : "string"
      }, {
        "name" : "phone",
        "type" : "string"
      }, {
        "name" : "property_damage",
        "type" : "array"
      }, {
        "name" : "risk",
        "type" : "int"
      }, {
        "name" : "ssn",
        "type" : "string"
      }, {
        "name" : "state",
        "type" : "string"
      }, {
        "name" : "street",
        "type" : "string"
      }, {
        "name" : "telematic_1",
        "type" : "int"
      }, {
        "name" : "telematic_2",
        "type" : "int"
      }, {
        "name" : "telematic_3",
        "type" : "int"
      }, {
        "name" : "telematic_4",
        "type" : "int"
      }, {
        "name" : "telematic_5",
        "type" : "int"
      }, {
        "name" : "vehicles_make",
        "type" : "array"
      }, {
        "name" : "vehicles_model",
        "type" : "array"
      }, {
        "name" : "zip",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_create_update_telematic_initiate_processPackages",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "customer",
        "type" : "relyins_da_def_create_update_telematic_initiate_customer"
      } ]
    }
);

Ext.define("relyins_da_def_create_update_telematic_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "customer_id",
        "type" : "string"
      }, {
        "name" : "telematic_1",
        "type" : "int"
      }, {
        "name" : "telematic_2",
        "type" : "int"
      }, {
        "name" : "telematic_3",
        "type" : "int"
      }, {
        "name" : "telematic_4",
        "type" : "int"
      }, {
        "name" : "telematic_5",
        "type" : "int"
      } ]
    }
);

Ext.define("relyins_da_def_create_update_telematic_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_update_telematic",
        "extraParams" : {
          "type" : "relyins_da_def_create_update_telematic_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_da_def_create_update_telematic_initiate_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "relyins_da_def_create_update_telematic_initiate_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_da_def_invoke_stateless_processupdate_telematic_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_update_telematic",
        "extraParams" : {
          "type" : "stateless"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "customer_id",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_create_report_customers_ad_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "average_customers",
        "type" : "array"
      }, {
        "name" : "days",
        "type" : "array"
      }, {
        "name" : "your_customers",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_da_def_create_report_customers_ad_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_report_customers_ad",
        "extraParams" : {
          "type" : "relyins_da_def_create_report_customers_ad_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_da_def_create_report_customers_ad_initiate_processVariables"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_da_def_create_related_policy_info_initiate_policy",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_create_related_policy_info_initiate_processPackages",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "policy",
        "type" : "relyins_da_def_create_related_policy_info_initiate_policy"
      } ]
    }
);

Ext.define("relyins_da_def_create_related_policy_info_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "approval",
        "type" : "string"
      }, {
        "name" : "body",
        "type" : "boolean"
      }, {
        "name" : "collision",
        "type" : "boolean"
      }, {
        "name" : "comprehensive",
        "type" : "boolean"
      }, {
        "name" : "coverage",
        "type" : "int"
      }, {
        "name" : "deductible",
        "type" : "int"
      }, {
        "name" : "medical",
        "type" : "boolean"
      }, {
        "name" : "payment",
        "type" : "int"
      }, {
        "name" : "payment_float",
        "type" : "float"
      }, {
        "name" : "policy_id",
        "type" : "string"
      }, {
        "name" : "property",
        "type" : "boolean"
      } ]
    }
);

Ext.define("relyins_da_def_create_related_policy_info_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_related_policy_info",
        "extraParams" : {
          "type" : "relyins_da_def_create_related_policy_info_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_da_def_create_related_policy_info_initiate_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "relyins_da_def_create_related_policy_info_initiate_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_da_def_create_report_manager_cust_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "data",
        "type" : "array"
      }, {
        "name" : "labels",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_da_def_create_report_manager_cust_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_report_manager_cust",
        "extraParams" : {
          "type" : "relyins_da_def_create_report_manager_cust_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "relyins_da_def_create_report_manager_cust_initiate_processVariables"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("relyins_da_def_relate_customer_policy_customer",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relationships/relyins_customer_policys",
        "extraParams" : {
          "type" : "relyins_da_def_relate_customer_policy_customer"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "vehicle_id",
        "type" : "string"
      }, {
        "name" : "vehicle_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_relate_customer_policy_policy",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relationships/relyins_customer_policys",
        "extraParams" : {
          "type" : "relyins_da_def_relate_customer_policy_policy"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "vehicle_id",
        "type" : "string"
      }, {
        "name" : "vehicle_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_update_customer_policy",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relationships/relyins_customer_policys",
        "extraParams" : {
          "type" : "relyins_da_def_update_customer_policy"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "vehicle_id",
        "type" : "string"
      }, {
        "name" : "vehicle_name",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_delete_customer_policy",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relationships/relyins_customer_policys",
        "extraParams" : {
          "type" : "relyins_da_def_delete_customer_policy"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_relate_customer_vehicle_customer",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relationships/relyins_customer_vehicles",
        "extraParams" : {
          "type" : "relyins_da_def_relate_customer_vehicle_customer"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "vin",
        "type" : "string"
      }, {
        "name" : "new_vehicle",
        "type" : "boolean"
      }, {
        "name" : "license_plate",
        "type" : "string"
      }, {
        "name" : "mileage",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_relate_customer_vehicle_vehicle",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relationships/relyins_customer_vehicles",
        "extraParams" : {
          "type" : "relyins_da_def_relate_customer_vehicle_vehicle"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "vin",
        "type" : "string"
      }, {
        "name" : "new_vehicle",
        "type" : "boolean"
      }, {
        "name" : "license_plate",
        "type" : "string"
      }, {
        "name" : "mileage",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_update_customer_vehicle",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relationships/relyins_customer_vehicles",
        "extraParams" : {
          "type" : "relyins_da_def_update_customer_vehicle"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "vin",
        "type" : "string"
      }, {
        "name" : "new_vehicle",
        "type" : "boolean"
      }, {
        "name" : "license_plate",
        "type" : "string"
      }, {
        "name" : "mileage",
        "type" : "int"
      } ]
    }
);

Ext.define("relyins_da_def_delete_customer_vehicle",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relationships/relyins_customer_vehicles",
        "extraParams" : {
          "type" : "relyins_da_def_delete_customer_vehicle"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_relate_customer_recent_act_customer",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relationships/relyins_customer_recent_acts",
        "extraParams" : {
          "type" : "relyins_da_def_relate_customer_recent_act_customer"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_relate_customer_recent_act_recent_activity",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relationships/relyins_customer_recent_acts",
        "extraParams" : {
          "type" : "relyins_da_def_relate_customer_recent_act_recent_activity"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_update_customer_recent_act",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relationships/relyins_customer_recent_acts",
        "extraParams" : {
          "type" : "relyins_da_def_update_customer_recent_act"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_delete_customer_recent_act",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relationships/relyins_customer_recent_acts",
        "extraParams" : {
          "type" : "relyins_da_def_delete_customer_recent_act"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_relate_customer_applicatio_customer",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relationships/relyins_customer_applicatios",
        "extraParams" : {
          "type" : "relyins_da_def_relate_customer_applicatio_customer"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_relate_customer_applicatio_application_form",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relationships/relyins_customer_applicatios",
        "extraParams" : {
          "type" : "relyins_da_def_relate_customer_applicatio_application_form"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_update_customer_applicatio",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relationships/relyins_customer_applicatios",
        "extraParams" : {
          "type" : "relyins_da_def_update_customer_applicatio"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_delete_customer_applicatio",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relationships/relyins_customer_applicatios",
        "extraParams" : {
          "type" : "relyins_da_def_delete_customer_applicatio"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_update_policy",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relyins_policys",
        "extraParams" : {
          "type" : "relyins_da_def_update_policy"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "approval",
        "type" : "string"
      }, {
        "name" : "bodily_injury",
        "type" : "boolean"
      }, {
        "name" : "collision",
        "type" : "boolean"
      }, {
        "name" : "comprehensive",
        "type" : "boolean"
      }, {
        "name" : "deductible",
        "type" : "int"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "medical_payments",
        "type" : "boolean"
      }, {
        "name" : "monthly_payment",
        "type" : "int"
      }, {
        "name" : "monthly_payment_float",
        "type" : "float"
      }, {
        "name" : "property_damage",
        "type" : "boolean"
      }, {
        "name" : "total_coverage",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_delete_policy",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relyins_policys",
        "extraParams" : {
          "type" : "relyins_da_def_delete_policy"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_import_policy",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relyins_policys",
        "extraParams" : {
          "type" : "relyins_da_def_import_policy"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "bodily_injury",
        "type" : "boolean"
      }, {
        "name" : "property_damage",
        "type" : "boolean"
      }, {
        "name" : "medical_payments",
        "type" : "boolean"
      }, {
        "name" : "comprehensive",
        "type" : "boolean"
      }, {
        "name" : "collision",
        "type" : "boolean"
      }, {
        "name" : "deductible",
        "type" : "int"
      }, {
        "name" : "total_coverage",
        "type" : "int"
      }, {
        "name" : "monthly_payment",
        "type" : "int"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "monthly_payment_float",
        "type" : "float"
      }, {
        "name" : "approval",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_update_application_form",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relyins_application_forms",
        "extraParams" : {
          "type" : "relyins_da_def_update_application_form"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_delete_application_form",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relyins_application_forms",
        "extraParams" : {
          "type" : "relyins_da_def_delete_application_form"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_import_application_form",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relyins_application_forms",
        "extraParams" : {
          "type" : "relyins_da_def_import_application_form"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_import_dm_document",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_da_def_import_dm_document"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_update_dm_document",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_da_def_update_dm_document"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_delete_dm_document",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_da_def_delete_dm_document"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_create_dm_folder",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders",
        "extraParams" : {
          "type" : "xcp_da_def_create_dm_folder"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_update_dm_folder",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders",
        "extraParams" : {
          "type" : "xcp_da_def_update_dm_folder"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_delete_dm_folder",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders",
        "extraParams" : {
          "type" : "xcp_da_def_delete_dm_folder"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_create_rootbo",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs",
        "extraParams" : {
          "type" : "xcp_da_def_create_rootbo"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_update_rootbo",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs",
        "extraParams" : {
          "type" : "xcp_da_def_update_rootbo"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_delete_rootbo",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs",
        "extraParams" : {
          "type" : "xcp_da_def_delete_rootbo"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_selector_rootbo",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs",
        "extraParams" : {
          "type" : "xcp_da_def_selector_rootbo"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "selection",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_create_recent_activity",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relyins_recent_activitys",
        "extraParams" : {
          "type" : "relyins_da_def_create_recent_activity"
        }
      },
      "fields" : [ {
        "name" : "activity_type",
        "type" : "string"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_update_recent_activity",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relyins_recent_activitys",
        "extraParams" : {
          "type" : "relyins_da_def_update_recent_activity"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "activity_type",
        "type" : "string"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_delete_recent_activity",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relyins_recent_activitys",
        "extraParams" : {
          "type" : "relyins_da_def_delete_recent_activity"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_create_customer",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relyins_customers",
        "extraParams" : {
          "type" : "relyins_da_def_create_customer"
        }
      },
      "fields" : [ {
        "name" : "birth_date",
        "type" : "string"
      }, {
        "name" : "bodily_injury",
        "type" : "array"
      }, {
        "name" : "city",
        "type" : "string"
      }, {
        "name" : "collision",
        "type" : "array"
      }, {
        "name" : "comprehensive",
        "type" : "array"
      }, {
        "name" : "customer_id",
        "type" : "string"
      }, {
        "name" : "driver_license",
        "type" : "string"
      }, {
        "name" : "email",
        "type" : "string"
      }, {
        "name" : "first_name",
        "type" : "string"
      }, {
        "name" : "had_accident",
        "type" : "boolean"
      }, {
        "name" : "had_insurance_declined",
        "type" : "boolean"
      }, {
        "name" : "had_license_revoked",
        "type" : "boolean"
      }, {
        "name" : "had_mental_impairments",
        "type" : "boolean"
      }, {
        "name" : "had_moving_violation",
        "type" : "boolean"
      }, {
        "name" : "last_name",
        "type" : "string"
      }, {
        "name" : "medical_payments",
        "type" : "array"
      }, {
        "name" : "occupation",
        "type" : "string"
      }, {
        "name" : "phone",
        "type" : "string"
      }, {
        "name" : "property_damage",
        "type" : "array"
      }, {
        "name" : "risk",
        "type" : "int"
      }, {
        "name" : "ssn",
        "type" : "string"
      }, {
        "name" : "state",
        "type" : "string"
      }, {
        "name" : "street",
        "type" : "string"
      }, {
        "name" : "telematic_1",
        "type" : "int"
      }, {
        "name" : "telematic_2",
        "type" : "int"
      }, {
        "name" : "telematic_3",
        "type" : "int"
      }, {
        "name" : "telematic_4",
        "type" : "int"
      }, {
        "name" : "telematic_5",
        "type" : "int"
      }, {
        "name" : "vehicles_make",
        "type" : "array"
      }, {
        "name" : "vehicles_model",
        "type" : "array"
      }, {
        "name" : "zip",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_update_customer",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relyins_customers",
        "extraParams" : {
          "type" : "relyins_da_def_update_customer"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "birth_date",
        "type" : "string"
      }, {
        "name" : "bodily_injury",
        "type" : "array"
      }, {
        "name" : "city",
        "type" : "string"
      }, {
        "name" : "collision",
        "type" : "array"
      }, {
        "name" : "comprehensive",
        "type" : "array"
      }, {
        "name" : "customer_id",
        "type" : "string"
      }, {
        "name" : "driver_license",
        "type" : "string"
      }, {
        "name" : "email",
        "type" : "string"
      }, {
        "name" : "first_name",
        "type" : "string"
      }, {
        "name" : "had_accident",
        "type" : "boolean"
      }, {
        "name" : "had_insurance_declined",
        "type" : "boolean"
      }, {
        "name" : "had_license_revoked",
        "type" : "boolean"
      }, {
        "name" : "had_mental_impairments",
        "type" : "boolean"
      }, {
        "name" : "had_moving_violation",
        "type" : "boolean"
      }, {
        "name" : "last_name",
        "type" : "string"
      }, {
        "name" : "medical_payments",
        "type" : "array"
      }, {
        "name" : "occupation",
        "type" : "string"
      }, {
        "name" : "phone",
        "type" : "string"
      }, {
        "name" : "property_damage",
        "type" : "array"
      }, {
        "name" : "risk",
        "type" : "int"
      }, {
        "name" : "ssn",
        "type" : "string"
      }, {
        "name" : "state",
        "type" : "string"
      }, {
        "name" : "street",
        "type" : "string"
      }, {
        "name" : "telematic_1",
        "type" : "int"
      }, {
        "name" : "telematic_2",
        "type" : "int"
      }, {
        "name" : "telematic_3",
        "type" : "int"
      }, {
        "name" : "telematic_4",
        "type" : "int"
      }, {
        "name" : "telematic_5",
        "type" : "int"
      }, {
        "name" : "vehicles_make",
        "type" : "array"
      }, {
        "name" : "vehicles_model",
        "type" : "array"
      }, {
        "name" : "zip",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_delete_customer",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relyins_customers",
        "extraParams" : {
          "type" : "relyins_da_def_delete_customer"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_create_manufacturer",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relyins_manufacturers",
        "extraParams" : {
          "type" : "relyins_da_def_create_manufacturer"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_update_manufacturer",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relyins_manufacturers",
        "extraParams" : {
          "type" : "relyins_da_def_update_manufacturer"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_delete_manufacturer",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relyins_manufacturers",
        "extraParams" : {
          "type" : "relyins_da_def_delete_manufacturer"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_create_vehicle",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relyins_vehicles",
        "extraParams" : {
          "type" : "relyins_da_def_create_vehicle"
        }
      },
      "fields" : [ {
        "name" : "body_type",
        "type" : "string"
      }, {
        "name" : "make",
        "type" : "string"
      }, {
        "name" : "model",
        "type" : "string"
      }, {
        "name" : "msrp",
        "type" : "float"
      }, {
        "name" : "rating",
        "type" : "string"
      }, {
        "name" : "year",
        "type" : "int"
      }, {
        "name" : "object_name",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_update_vehicle",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relyins_vehicles",
        "extraParams" : {
          "type" : "relyins_da_def_update_vehicle"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "body_type",
        "type" : "string"
      }, {
        "name" : "make",
        "type" : "string"
      }, {
        "name" : "model",
        "type" : "string"
      }, {
        "name" : "msrp",
        "type" : "float"
      }, {
        "name" : "rating",
        "type" : "string"
      }, {
        "name" : "year",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_da_def_delete_vehicle",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relyins_vehicles",
        "extraParams" : {
          "type" : "relyins_da_def_delete_vehicle"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_my_tasks_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_tasks",
        "extraParams" : {
          "type" : "relyins_my_tasks"
        }
      },
      "fields" : [ {
        "name" : "packagescustomerfirst_name",
        "type" : "string"
      }, {
        "name" : "packagescustomerlast_name",
        "type" : "string"
      }, {
        "name" : "packagescustomerstreet",
        "type" : "string"
      }, {
        "name" : "packagescustomercity",
        "type" : "string"
      }, {
        "name" : "packagescustomerzip",
        "type" : "string"
      }, {
        "name" : "packagescustomerstate",
        "type" : "string"
      }, {
        "name" : "task_due_date",
        "type" : "string"
      }, {
        "name" : "task_subject",
        "type" : "string"
      }, {
        "name" : "task_creation_date",
        "type" : "string"
      }, {
        "name" : "task_performer_name",
        "type" : "string"
      }, {
        "name" : "task_state",
        "type" : "int"
      }, {
        "name" : "workqueue_name",
        "type" : "string"
      }, {
        "name" : "task_name",
        "type" : "string"
      }, {
        "name" : "process_system_name",
        "type" : "string"
      }, {
        "name" : "activity_system_name",
        "type" : "string"
      }, {
        "name" : "is_rejectable",
        "type" : "boolean"
      }, {
        "name" : "is_repeatable",
        "type" : "boolean"
      }, {
        "name" : "is_delegable",
        "type" : "boolean"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("relyins_inbox_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_tasks",
        "extraParams" : {
          "type" : "relyins_inbox"
        }
      },
      "fields" : [ {
        "name" : "packagescustomercustomer_id",
        "type" : "string"
      }, {
        "name" : "packagescustomerfirst_name",
        "type" : "string"
      }, {
        "name" : "packagescustomerlast_name",
        "type" : "string"
      }, {
        "name" : "packagescustomerbirth_date",
        "type" : "string"
      }, {
        "name" : "packagescustomervehicleschild_vehiclemake",
        "type" : "array"
      }, {
        "name" : "packagescustomervehicleschild_vehiclemodel",
        "type" : "array"
      }, {
        "name" : "packagescustomervehiclesvin",
        "type" : "array"
      }, {
        "name" : "packagescustomerstreet",
        "type" : "string"
      }, {
        "name" : "packagescustomerstate",
        "type" : "string"
      }, {
        "name" : "packagescustomerzip",
        "type" : "string"
      }, {
        "name" : "packagescustomercity",
        "type" : "string"
      }, {
        "name" : "task_performer_name",
        "type" : "string"
      }, {
        "name" : "task_state",
        "type" : "int"
      }, {
        "name" : "workqueue_name",
        "type" : "string"
      }, {
        "name" : "task_name",
        "type" : "string"
      }, {
        "name" : "process_system_name",
        "type" : "string"
      }, {
        "name" : "activity_system_name",
        "type" : "string"
      }, {
        "name" : "is_rejectable",
        "type" : "boolean"
      }, {
        "name" : "is_repeatable",
        "type" : "boolean"
      }, {
        "name" : "is_delegable",
        "type" : "boolean"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("relyins_report_manager_ag_2_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_report_manager_ag_2_initiate",
        "extraParams" : {
          "type" : "relyins_report_manager_ag_2_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "categories",
        "type" : "string"
      }, {
        "name" : "policies",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("relyins_create_policy_objec_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_create_policy_objec_initiate",
        "extraParams" : {
          "type" : "relyins_create_policy_objec_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "policy_id",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("relyins_report_manager_ag_1_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_report_manager_ag_1_initiate",
        "extraParams" : {
          "type" : "relyins_report_manager_ag_1_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "categories",
        "type" : "string"
      }, {
        "name" : "customers",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("relyins_report_manager_perf_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_report_manager_perf_initiate",
        "extraParams" : {
          "type" : "relyins_report_manager_perf_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "performance",
        "type" : "float"
      }, {
        "name" : "plan",
        "type" : "float"
      }, {
        "name" : "quarters",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("relyins_report_manager_top__initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_report_manager_top__initiate",
        "extraParams" : {
          "type" : "relyins_report_manager_top__initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "agents",
        "type" : "string"
      }, {
        "name" : "new_customers",
        "type" : "int"
      }, {
        "name" : "new_policies",
        "type" : "int"
      }, {
        "name" : "policies_existing",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("relyins_report_manager_agen_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_report_manager_agen_initiate",
        "extraParams" : {
          "type" : "relyins_report_manager_agen_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "categories",
        "type" : "string"
      }, {
        "name" : "customers",
        "type" : "int"
      }, {
        "name" : "policies",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("relyins_report_policy_types_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_report_policy_types_initiate",
        "extraParams" : {
          "type" : "relyins_report_policy_types_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "number_of_policies",
        "type" : "int"
      }, {
        "name" : "types_of_policies",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_user_from_queue_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_user_from_queue_initiate",
        "extraParams" : {
          "type" : "xcp_user_from_queue_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "user_list",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("relyins_report_average_time_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_report_average_time_initiate",
        "extraParams" : {
          "type" : "relyins_report_average_time_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "average_time",
        "type" : "float"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_activity_list_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_activity_list_initiate",
        "extraParams" : {
          "type" : "xcp_activity_list_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "output_activity_names",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_userorgroup_selecti_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_userorgroup_selecti",
        "extraParams" : {
          "type" : "xcp_userorgroup_selecti_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "user_group_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_queue_list_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_queue_list_initiate",
        "extraParams" : {
          "type" : "xcp_queue_list_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "queuelist",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_taskhistory_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_taskhistory_initiate",
        "extraParams" : {
          "type" : "xcp_taskhistory_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "activity_name",
        "type" : "string"
      }, {
        "name" : "date",
        "type" : "string"
      }, {
        "name" : "performer",
        "type" : "string"
      }, {
        "name" : "status",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("relyins_report_customers_ad_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_report_customers_ad_initiate",
        "extraParams" : {
          "type" : "relyins_report_customers_ad_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "average_customers",
        "type" : "int"
      }, {
        "name" : "days",
        "type" : "string"
      }, {
        "name" : "your_customers",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("relyins_related_policy_info_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_related_policy_info_initiate",
        "extraParams" : {
          "type" : "relyins_related_policy_info_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "approval",
        "type" : "string"
      }, {
        "name" : "body",
        "type" : "boolean"
      }, {
        "name" : "collision",
        "type" : "boolean"
      }, {
        "name" : "comprehensive",
        "type" : "boolean"
      }, {
        "name" : "coverage",
        "type" : "int"
      }, {
        "name" : "deductible",
        "type" : "int"
      }, {
        "name" : "medical",
        "type" : "boolean"
      }, {
        "name" : "payment",
        "type" : "int"
      }, {
        "name" : "payment_float",
        "type" : "float"
      }, {
        "name" : "property",
        "type" : "boolean"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("relyins_report_manager_cust_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/relyins_report_manager_cust_initiate",
        "extraParams" : {
          "type" : "relyins_report_manager_cust_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "data",
        "type" : "int"
      }, {
        "name" : "labels",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("relyins_search_vehicle_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relyins_vehicles",
        "extraParams" : {
          "type" : "relyins_search_vehicle"
        }
      },
      "fields" : [ {
        "name" : "make",
        "type" : "string"
      }, {
        "name" : "model",
        "type" : "string"
      }, {
        "name" : "rating",
        "type" : "string"
      }, {
        "name" : "year",
        "type" : "int"
      }, {
        "name" : "msrp",
        "type" : "float"
      }, {
        "name" : "body_type",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("relyins_applications_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relyins_application_forms",
        "extraParams" : {
          "type" : "relyins_applications"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_content_rt_query_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_content_rt_query"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_folder_rt_query_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders",
        "extraParams" : {
          "type" : "xcp_folder_rt_query"
        }
      },
      "fields" : [ {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("relyins_recent_activities_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relyins_recent_activitys",
        "extraParams" : {
          "type" : "relyins_recent_activities"
        }
      },
      "fields" : [ {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "activity_type",
        "type" : "string"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("relyins_search_customer_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relyins_customers",
        "extraParams" : {
          "type" : "relyins_search_customer"
        }
      },
      "fields" : [ {
        "name" : "customer_id",
        "type" : "string"
      }, {
        "name" : "first_name",
        "type" : "string"
      }, {
        "name" : "last_name",
        "type" : "string"
      }, {
        "name" : "birth_date",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("relyins_related_vehicles_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relyins_customer_vehicles",
        "extraParams" : {
          "type" : "relyins_related_vehicles"
        }
      },
      "fields" : [ {
        "name" : "child_vehicleid",
        "type" : "string"
      }, {
        "name" : "child_vehiclemake",
        "type" : "string"
      }, {
        "name" : "child_vehiclemodel",
        "type" : "string"
      }, {
        "name" : "child_vehicleyear",
        "type" : "int"
      }, {
        "name" : "child_vehiclemsrp",
        "type" : "float"
      }, {
        "name" : "child_vehiclerating",
        "type" : "string"
      }, {
        "name" : "vin",
        "type" : "string"
      }, {
        "name" : "license_plate",
        "type" : "string"
      }, {
        "name" : "mileage",
        "type" : "int"
      }, {
        "name" : "new_vehicle",
        "type" : "boolean"
      }, {
        "name" : "child_vehicleobject_name",
        "type" : "string"
      }, {
        "name" : "child_vehiclebody_type",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("relyins_related_policies_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relyins_customer_policys",
        "extraParams" : {
          "type" : "relyins_related_policies"
        }
      },
      "fields" : [ {
        "name" : "vehicle_id",
        "type" : "string"
      }, {
        "name" : "vehicle_name",
        "type" : "string"
      }, {
        "name" : "child_policyid",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("relyins_related_activities_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relyins_customer_recent_acts",
        "extraParams" : {
          "type" : "relyins_related_activities"
        }
      },
      "fields" : [ {
        "name" : "child_recent_activityactivity_type",
        "type" : "string"
      }, {
        "name" : "child_recent_activitydescription",
        "type" : "string"
      }, {
        "name" : "child_recent_activityr_creation_date",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("relyins_all_manufacturers_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relyins_manufacturers",
        "extraParams" : {
          "type" : "relyins_all_manufacturers"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_versionHistoryQuery_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/sysobject",
        "extraParams" : {
          "type" : "versionHistoryQuery"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_networklocation_selecti_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/networkLocations",
        "extraParams" : {
          "type" : "xcp_networklocation_selecti_ds"
        }
      },
      "fields" : [ {
        "name" : "location_id",
        "type" : "string"
      }, {
        "name" : "location_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_attachment_viewer_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "pplication/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_attachment_viewer_ds"
        }
      },
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_folderQuery_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/sysobject",
        "extraParams" : {
          "type" : "folderQuery"
        }
      },
      "fields" : [ {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "icon",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_link_cnt",
        "type" : "int"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("relyins_facets_customer_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/relyins_customers",
        "extraParams" : {
          "type" : "relyins_facets_customer"
        }
      },
      "fields" : [ {
        "name" : "last_name",
        "type" : "string"
      }, {
        "name" : "first_name",
        "type" : "string"
      }, {
        "name" : "ssn",
        "type" : "string"
      }, {
        "name" : "street",
        "type" : "string"
      }, {
        "name" : "zip",
        "type" : "string"
      }, {
        "name" : "city",
        "type" : "string"
      }, {
        "name" : "state",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "summary",
        "type" : "string"
      }, {
        "name" : "matchingterms",
        "type" : "array"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("relyins_application_form_import_application__model",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "api" : {
          "read" : "application/relyins_application_forms/template"
        },
        "type" : "xcp_rest",
        "url" : "application/relyins_application_forms",
        "extraParams" : {
          "type" : "relyins_da_def_import_application_form"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "content_id",
        "type" : "string"
      }, {
        "name" : "folder_id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_dm_folder_base_folder_1_model",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "api" : {
          "read" : "application/xcp_dm_folders/template"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders",
        "extraParams" : {
          "type" : "xcp_da_def_create_dm_folder"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "folder_id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_dm_folder_base_folder_4_model",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "api" : {
          "read" : "application/xcp_dm_folders/template"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders",
        "extraParams" : {
          "type" : "xcp_da_def_create_dm_folder"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "folder_id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_dm_folder_base_folder_3_model",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "api" : {
          "read" : "application/xcp_dm_folders/template"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders",
        "extraParams" : {
          "type" : "xcp_da_def_create_dm_folder"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "folder_id",
        "type" : "string"
      } ]
    }
);

Ext.define("relyins_customer_add_a_vehicle_model",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcp_relation_writer"
        },
        "type" : "xcp_rest",
        "url" : "application/relyins_customers/{id}/vehicles",
        "extraParams" : {
          "type" : "customer_vehicle"
        }
      },
      "fields" : [ {
        "name" : "targetId",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "vin",
        "type" : "string"
      }, {
        "name" : "new_vehicle",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "license_plate",
        "type" : "string"
      }, {
        "name" : "mileage",
        "useNull" : true,
        "type" : "int"
      } ]
    }
);

Ext.define("xcp_dm_folder_base_folder_model",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "api" : {
          "read" : "application/xcp_dm_folders/template"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders",
        "extraParams" : {
          "type" : "xcp_da_def_create_dm_folder"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "folder_id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_dm_folder_base_folder_2_model",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "api" : {
          "read" : "application/xcp_dm_folders/template"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders",
        "extraParams" : {
          "type" : "xcp_da_def_create_dm_folder"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "folder_id",
        "type" : "string"
      } ]
    }
);

Ext.define("roles",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "rest",
        "url" : "application/roles"
      },
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "name",
        "type" : "string"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "namespace",
        "type" : "string"
      } ]
    }
);

Ext.define("role",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "type" : "json"
        },
        "type" : "rest",
        "url" : "application/role"
      },
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "name",
        "type" : "string"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "namespace",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp.data.model.UserPreferences",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/currentUser/preferences",
        "extraParams" : {
          "fields" : "workflowAutoNextTask,role,delegate_task,delegateToUser,networkLocation"
        }
      },
      "fields" : [ {
        "name" : "workflowAutoNextTask",
        "type" : "string"
      }, {
        "name" : "role",
        "type" : "string"
      }, {
        "name" : "delegate_task",
        "type" : "string"
      }, {
        "name" : "delegateToUser",
        "type" : "string"
      }, {
        "name" : "networkLocation",
        "type" : "string"
      } ]
    }
);
