/*
 * Copyright (c) 2011. EMC Corporation. All Rights Reserved.
 */

// Expressions.js

Ext.namespace("xcp");

Ext.define("Expression.IdFromContext",
{
	alias : 'expression.id_from_context',

	statics : {
		evaluate : function () {
			return xcp.navigationManager.currentNavigationContext.objectId;
		}
	}

});

Ext.define("xcp.expression.Generated",{
extend:"xcp.core.expr.BaseExpression",
singleton:true});

xcp.expression.Generated.assign_task_da_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'xcp_assign_task','Inputs.id'); }

xcp.expression.Generated.assign_task_da_userName_1 = function (context) { return this.getValueFromWidget(context,'dropdown_list','value'); }

xcp.expression.Generated.attachment_sel_da_selection_1 = function (context) { return this.getValueFromSelectionModel(context,'results_list','id'); }

xcp.expression.Generated.changeworkqueue_da_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'xcp_changeworkqueue','Inputs.id'); }

xcp.expression.Generated.changeworkqueue_da_queueName_1 = function (context) { return this.getValueFromWidget(context,'queue_dropdown_list','value'); }

xcp.expression.Generated.hold_task_da_holdUntil_1 = function (context) { return this.getValueFromWidget(context,'hold_until','value'); }

xcp.expression.Generated.hold_task_da_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'xcp_hold_task','Inputs.id'); }

xcp.expression.Generated.new_application_a_1_da_attachments_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.attachments'); }

xcp.expression.Generated.new_application_a_1_da_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.id'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_application_form_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.application_form.id'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_application_form_object_name_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.application_form.object_name'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_birth_date_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.birth_date'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_bodily_injury_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.bodily_injury'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_city_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.city'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_collision_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.collision'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_comprehensive_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.comprehensive'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_customer_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.customer_id'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_driver_license_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.driver_license'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_email_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.email'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_first_name_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.first_name'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_had_accident_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.had_accident'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_had_insurance_declined_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.had_insurance_declined'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_had_license_revoked_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.had_license_revoked'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_had_mental_impairments_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.had_mental_impairments'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_had_moving_violation_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.had_moving_violation'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.id'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_last_name_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.last_name'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_medical_payments_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.medical_payments'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_object_name_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.object_name'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_occupation_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.occupation'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_phone_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.phone'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_property_damage_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.property_damage'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_risk_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.risk'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_ssn_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.ssn'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_state_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.state'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_street_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.street'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_telematic_1_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.telematic_1'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_telematic_2_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.telematic_2'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_telematic_3_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.telematic_3'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_telematic_4_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.telematic_4'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_telematic_5_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.telematic_5'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_vehicles_make_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.vehicles_make'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_vehicles_model_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.vehicles_model'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_customer_zip_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.customer.zip'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_policy_approval_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.policy.approval'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_policy_bodily_injury_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.policy.bodily_injury'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_policy_collision_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.policy.collision'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_policy_comprehensive_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.policy.comprehensive'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_policy_deductible_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.policy.deductible'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_policy_description_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.policy.description'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_policy_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.policy.id'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_policy_medical_payments_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.policy.medical_payments'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_policy_monthly_payment_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.policy.monthly_payment'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_policy_monthly_payment_float_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.policy.monthly_payment_float'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_policy_object_name_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.policy.object_name'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_policy_property_damage_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.policy.property_damage'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_policy_total_coverage_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.policy.total_coverage'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_vehicle_body_type_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.vehicle.body_type'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_vehicle_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.vehicle.id'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_vehicle_make_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.vehicle.make'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_vehicle_model_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.vehicle.model'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_vehicle_msrp_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.vehicle.msrp'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_vehicle_object_name_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.vehicle.object_name'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_vehicle_rating_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.vehicle.rating'); }

xcp.expression.Generated.new_application_a_1_da_processPackages_vehicle_year_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processPackages.vehicle.year'); }

xcp.expression.Generated.new_application_a_1_da_processVariables_license_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processVariables.license'); }

xcp.expression.Generated.new_application_a_1_da_processVariables_mileage_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processVariables.mileage'); }

xcp.expression.Generated.new_application_a_1_da_processVariables_new_vehicle_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processVariables.new_vehicle'); }

xcp.expression.Generated.new_application_a_1_da_processVariables_vin_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_1','Inputs.processVariables.vin'); }

xcp.expression.Generated.new_application_a_1_da_userName_1 = function (context) { return this.getValueFromWidget(context,'username_dropdown_list','value'); }

xcp.expression.Generated.new_application_a_2_da_attachments_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.attachments'); }

xcp.expression.Generated.new_application_a_2_da_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.id'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_application_form_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.application_form.id'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_application_form_object_name_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.application_form.object_name'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_birth_date_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.birth_date'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_bodily_injury_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.bodily_injury'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_city_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.city'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_collision_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.collision'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_comprehensive_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.comprehensive'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_customer_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.customer_id'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_driver_license_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.driver_license'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_email_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.email'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_first_name_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.first_name'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_had_accident_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.had_accident'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_had_insurance_declined_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.had_insurance_declined'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_had_license_revoked_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.had_license_revoked'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_had_mental_impairments_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.had_mental_impairments'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_had_moving_violation_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.had_moving_violation'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.id'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_last_name_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.last_name'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_medical_payments_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.medical_payments'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_object_name_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.object_name'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_occupation_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.occupation'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_phone_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.phone'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_property_damage_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.property_damage'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_risk_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.risk'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_ssn_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.ssn'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_state_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.state'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_street_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.street'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_telematic_1_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.telematic_1'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_telematic_2_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.telematic_2'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_telematic_3_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.telematic_3'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_telematic_4_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.telematic_4'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_telematic_5_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.telematic_5'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_vehicles_make_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.vehicles_make'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_vehicles_model_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.vehicles_model'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_customer_zip_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.customer.zip'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_policy_approval_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.policy.approval'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_policy_bodily_injury_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.policy.bodily_injury'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_policy_collision_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.policy.collision'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_policy_comprehensive_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.policy.comprehensive'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_policy_deductible_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.policy.deductible'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_policy_description_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.policy.description'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_policy_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.policy.id'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_policy_medical_payments_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.policy.medical_payments'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_policy_monthly_payment_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.policy.monthly_payment'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_policy_monthly_payment_float_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.policy.monthly_payment_float'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_policy_object_name_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.policy.object_name'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_policy_property_damage_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.policy.property_damage'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_policy_total_coverage_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.policy.total_coverage'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_vehicle_body_type_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.vehicle.body_type'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_vehicle_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.vehicle.id'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_vehicle_make_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.vehicle.make'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_vehicle_model_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.vehicle.model'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_vehicle_msrp_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.vehicle.msrp'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_vehicle_object_name_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.vehicle.object_name'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_vehicle_rating_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.vehicle.rating'); }

xcp.expression.Generated.new_application_a_2_da_processPackages_vehicle_year_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processPackages.vehicle.year'); }

xcp.expression.Generated.new_application_a_2_da_processVariables_license_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processVariables.license'); }

xcp.expression.Generated.new_application_a_2_da_processVariables_mileage_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processVariables.mileage'); }

xcp.expression.Generated.new_application_a_2_da_processVariables_new_vehicle_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processVariables.new_vehicle'); }

xcp.expression.Generated.new_application_a_2_da_processVariables_vin_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_a_2','Inputs.processVariables.vin'); }

xcp.expression.Generated.new_application_a_2_da_userName_1 = function (context) { return this.getValueFromWidget(context,'username_dropdown_list','value'); }

xcp.expression.Generated.new_application_r_1_da_attachments_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.attachments'); }

xcp.expression.Generated.new_application_r_1_da_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.id'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_application_form_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.application_form.id'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_application_form_object_name_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.application_form.object_name'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_birth_date_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.birth_date'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_bodily_injury_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.bodily_injury'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_city_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.city'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_collision_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.collision'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_comprehensive_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.comprehensive'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_customer_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.customer_id'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_driver_license_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.driver_license'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_email_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.email'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_first_name_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.first_name'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_had_accident_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.had_accident'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_had_insurance_declined_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.had_insurance_declined'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_had_license_revoked_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.had_license_revoked'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_had_mental_impairments_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.had_mental_impairments'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_had_moving_violation_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.had_moving_violation'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.id'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_last_name_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.last_name'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_medical_payments_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.medical_payments'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_object_name_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.object_name'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_occupation_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.occupation'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_phone_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.phone'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_property_damage_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.property_damage'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_risk_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.risk'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_ssn_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.ssn'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_state_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.state'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_street_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.street'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_telematic_1_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.telematic_1'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_telematic_2_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.telematic_2'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_telematic_3_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.telematic_3'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_telematic_4_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.telematic_4'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_telematic_5_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.telematic_5'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_vehicles_make_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.vehicles_make'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_vehicles_model_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.vehicles_model'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_customer_zip_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.customer.zip'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_policy_approval_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.policy.approval'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_policy_bodily_injury_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.policy.bodily_injury'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_policy_collision_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.policy.collision'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_policy_comprehensive_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.policy.comprehensive'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_policy_deductible_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.policy.deductible'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_policy_description_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.policy.description'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_policy_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.policy.id'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_policy_medical_payments_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.policy.medical_payments'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_policy_monthly_payment_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.policy.monthly_payment'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_policy_monthly_payment_float_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.policy.monthly_payment_float'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_policy_object_name_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.policy.object_name'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_policy_property_damage_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.policy.property_damage'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_policy_total_coverage_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.policy.total_coverage'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_vehicle_body_type_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.vehicle.body_type'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_vehicle_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.vehicle.id'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_vehicle_make_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.vehicle.make'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_vehicle_model_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.vehicle.model'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_vehicle_msrp_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.vehicle.msrp'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_vehicle_object_name_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.vehicle.object_name'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_vehicle_rating_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.vehicle.rating'); }

xcp.expression.Generated.new_application_r_1_da_processPackages_vehicle_year_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processPackages.vehicle.year'); }

xcp.expression.Generated.new_application_r_1_da_processVariables_license_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processVariables.license'); }

xcp.expression.Generated.new_application_r_1_da_processVariables_mileage_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processVariables.mileage'); }

xcp.expression.Generated.new_application_r_1_da_processVariables_new_vehicle_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processVariables.new_vehicle'); }

xcp.expression.Generated.new_application_r_1_da_processVariables_vin_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_1','Inputs.processVariables.vin'); }

xcp.expression.Generated.new_application_r_1_da_userName_1 = function (context) { return this.getValueFromWidget(context,'username_dropdown_list','value'); }

xcp.expression.Generated.new_application_r_3_da_attachments_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.attachments'); }

xcp.expression.Generated.new_application_r_3_da_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.id'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_application_form_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.application_form.id'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_application_form_object_name_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.application_form.object_name'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_birth_date_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.birth_date'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_bodily_injury_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.bodily_injury'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_city_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.city'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_collision_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.collision'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_comprehensive_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.comprehensive'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_customer_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.customer_id'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_driver_license_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.driver_license'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_email_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.email'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_first_name_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.first_name'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_had_accident_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.had_accident'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_had_insurance_declined_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.had_insurance_declined'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_had_license_revoked_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.had_license_revoked'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_had_mental_impairments_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.had_mental_impairments'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_had_moving_violation_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.had_moving_violation'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.id'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_last_name_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.last_name'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_medical_payments_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.medical_payments'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_object_name_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.object_name'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_occupation_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.occupation'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_phone_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.phone'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_property_damage_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.property_damage'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_risk_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.risk'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_ssn_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.ssn'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_state_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.state'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_street_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.street'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_telematic_1_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.telematic_1'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_telematic_2_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.telematic_2'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_telematic_3_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.telematic_3'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_telematic_4_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.telematic_4'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_telematic_5_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.telematic_5'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_vehicles_make_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.vehicles_make'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_vehicles_model_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.vehicles_model'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_customer_zip_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.customer.zip'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_policy_approval_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.policy.approval'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_policy_bodily_injury_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.policy.bodily_injury'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_policy_collision_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.policy.collision'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_policy_comprehensive_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.policy.comprehensive'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_policy_deductible_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.policy.deductible'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_policy_description_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.policy.description'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_policy_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.policy.id'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_policy_medical_payments_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.policy.medical_payments'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_policy_monthly_payment_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.policy.monthly_payment'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_policy_monthly_payment_float_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.policy.monthly_payment_float'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_policy_object_name_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.policy.object_name'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_policy_property_damage_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.policy.property_damage'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_policy_total_coverage_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.policy.total_coverage'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_vehicle_body_type_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.vehicle.body_type'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_vehicle_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.vehicle.id'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_vehicle_make_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.vehicle.make'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_vehicle_model_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.vehicle.model'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_vehicle_msrp_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.vehicle.msrp'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_vehicle_object_name_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.vehicle.object_name'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_vehicle_rating_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.vehicle.rating'); }

xcp.expression.Generated.new_application_r_3_da_processPackages_vehicle_year_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processPackages.vehicle.year'); }

xcp.expression.Generated.new_application_r_3_da_processVariables_license_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processVariables.license'); }

xcp.expression.Generated.new_application_r_3_da_processVariables_mileage_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processVariables.mileage'); }

xcp.expression.Generated.new_application_r_3_da_processVariables_new_vehicle_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processVariables.new_vehicle'); }

xcp.expression.Generated.new_application_r_3_da_processVariables_vin_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'relyins_new_application_r_3','Inputs.processVariables.vin'); }

xcp.expression.Generated.new_application_r_3_da_userName_1 = function (context) { return this.getValueFromWidget(context,'username_dropdown_list','value'); }

xcp.expression.Generated.reassign_task_da_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'xcp_reassign_task','Inputs.id'); }

xcp.expression.Generated.reassign_task_da_userName_1 = function (context) { return this.getValueFromWidget(context,'dropdown_list','value'); }

xcp.expression.Generated.relyins_add_a_vehicle_step__search_vehicle_input_make_1 = function (context) { return this.getValueFromWidget(context,'text_input','value'); }

xcp.expression.Generated.relyins_attachment_step_folderQuery_1_folder_id_1 = function (context) { return xcp.widget.ContentTree.getSelectedNodeId(context,'content_tree'); }

xcp.expression.Generated.relyins_create_customer_da_def_create_customer_birth_date_1 = function (context) { return this.getValueFromWidget(context,'birth_date','value'); }

xcp.expression.Generated.relyins_create_customer_da_def_create_customer_city_1 = function (context) { return this.getValueFromWidget(context,'city','value'); }

xcp.expression.Generated.relyins_create_customer_da_def_create_customer_customer_id_1 = function (context) { return this.getValueFromWidget(context,'customer_id','value'); }

xcp.expression.Generated.relyins_create_customer_da_def_create_customer_first_name_1 = function (context) { return this.getValueFromWidget(context,'first_name','value'); }

xcp.expression.Generated.relyins_create_customer_da_def_create_customer_last_name_1 = function (context) { return this.getValueFromWidget(context,'last_name','value'); }

xcp.expression.Generated.relyins_create_customer_da_def_create_customer_state_1 = function (context) { return this.getValueFromWidget(context,'state','value'); }

xcp.expression.Generated.relyins_create_customer_da_def_create_customer_street_1 = function (context) { return this.getValueFromWidget(context,'street','value'); }

xcp.expression.Generated.relyins_create_customer_da_def_create_customer_zip_1 = function (context) { return this.getValueFromWidget(context,'zip','value'); }

xcp.expression.Generated.relyins_create_policy_related_vehicles_input_object_id_1 = function (context) { return this.getValueFromWidget(context,'selector','value'); }

xcp.expression.Generated.relyins_create_policy_selector_value_1 = function (context) { return 'FAKE'; }

xcp.expression.Generated.relyins_customer_communicat_button_hidden_1 = function (context) { return this.getValueFromWidget(context,'template_list','value') != 'Telematic'; }

xcp.expression.Generated.relyins_customer_communicat_da_def_invoke_stateless_processsend_telematic_emai_initiate_from_1 = function (context) { return 'Reliable_Insurance@vlab.local'; }

xcp.expression.Generated.relyins_customer_communicat_da_def_invoke_stateless_processsend_telematic_emai_initiate_to_1 = function (context) { return 'dmadmin@vlab.local'; }

xcp.expression.Generated.relyins_customer_communicat_image2_hidden_1 = function (context) { return this.getValueFromWidget(context,'template_list','value') != 'Telematic'; }

xcp.expression.Generated.relyins_customer_communicat_value_display_hidden_1 = function (context) { return this.getValueFromWidget(context,'template_list','value') == 'Telematic'; }

xcp.expression.Generated.relyins_customer_communicat_value_display_value_1 = function (context) { return '<i>Select a template to see a preview</i>'; }

xcp.expression.Generated.relyins_customers_ft_facets_customer_q_1 = function (context) { return this.getValueFromWidget(context,'text_input','value'); }

xcp.expression.Generated.relyins_customers_search_customer_input_last_name_1 = function (context) { return this.getValueFromWidget(context,'text_input','value'); }

xcp.expression.Generated.relyins_edit_base_content_comments_objectId_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_document','id'); }

xcp.expression.Generated.relyins_edit_base_content_da_def_update_dm_document_id_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_document','id'); }

xcp.expression.Generated.relyins_edit_base_content_da_def_update_dm_document_object_name_1 = function (context) { return this.getValueFromWidget(context,'object_name','value'); }

xcp.expression.Generated.relyins_edit_base_content_r_lock_owner_hidden_1 = function (context) { return xcp.functions.length(this.getValueFromModel(context,'xcp_dm_document','r_lock_owner')) == 0; }

xcp.expression.Generated.relyins_edit_base_content_r_lock_owner_value_1 = function (context) { return xcp.functions.lockStatus(this.getValueFromModel(context,'xcp_dm_document','r_lock_date'), this.getValueFromModel(context,'xcp_dm_document','r_lock_owner')); }

xcp.expression.Generated.relyins_edit_base_content_viewer_contentType_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_document','a_content_type'); }

xcp.expression.Generated.relyins_edit_base_content_viewer_objectId_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_document','id'); }

xcp.expression.Generated.relyins_edit_base_folder_da_def_update_dm_folder_id_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_folder','id'); }

xcp.expression.Generated.relyins_edit_base_folder_da_def_update_dm_folder_object_name_1 = function (context) { return this.getValueFromWidget(context,'object_name','value'); }

xcp.expression.Generated.relyins_edit_customer_da_def_update_customer_birth_date_1 = function (context) { return this.getValueFromWidget(context,'birth_date','value'); }

xcp.expression.Generated.relyins_edit_customer_da_def_update_customer_city_1 = function (context) { return this.getValueFromWidget(context,'city','value'); }

xcp.expression.Generated.relyins_edit_customer_da_def_update_customer_customer_id_1 = function (context) { return this.getValueFromWidget(context,'customer_id','value'); }

xcp.expression.Generated.relyins_edit_customer_da_def_update_customer_driver_license_1 = function (context) { return this.getValueFromWidget(context,'driver_license','value'); }

xcp.expression.Generated.relyins_edit_customer_da_def_update_customer_email_1 = function (context) { return this.getValueFromWidget(context,'email','value'); }

xcp.expression.Generated.relyins_edit_customer_da_def_update_customer_first_name_1 = function (context) { return this.getValueFromWidget(context,'first_name','value'); }

xcp.expression.Generated.relyins_edit_customer_da_def_update_customer_id_1 = function (context) { return this.getValueFromModel(context,'relyins_customer','id'); }

xcp.expression.Generated.relyins_edit_customer_da_def_update_customer_last_name_1 = function (context) { return this.getValueFromWidget(context,'last_name','value'); }

xcp.expression.Generated.relyins_edit_customer_da_def_update_customer_occupation_1 = function (context) { return this.getValueFromWidget(context,'occupation','value'); }

xcp.expression.Generated.relyins_edit_customer_da_def_update_customer_phone_1 = function (context) { return this.getValueFromWidget(context,'phone','value'); }

xcp.expression.Generated.relyins_edit_customer_da_def_update_customer_risk_1 = function (context) { return this.getValueFromWidget(context,'risk','value'); }

xcp.expression.Generated.relyins_edit_customer_da_def_update_customer_ssn_1 = function (context) { return this.getValueFromWidget(context,'ssn','value'); }

xcp.expression.Generated.relyins_edit_customer_da_def_update_customer_state_1 = function (context) { return this.getValueFromWidget(context,'state','value'); }

xcp.expression.Generated.relyins_edit_customer_da_def_update_customer_street_1 = function (context) { return this.getValueFromWidget(context,'street','value'); }

xcp.expression.Generated.relyins_edit_customer_da_def_update_customer_zip_1 = function (context) { return this.getValueFromWidget(context,'zip','value'); }

xcp.expression.Generated.relyins_forward_activity_activity_list_initiate_staless_ds_1_id_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }

xcp.expression.Generated.relyins_forward_activity_activity_list_initiate_staless_ds_1_port_type_1 = function (context) { return 'INPUT'; }

xcp.expression.Generated.relyins_forward_activity_multi_activity_list_initiate_staless_ds_1_id_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }

xcp.expression.Generated.relyins_forward_activity_multi_activity_list_initiate_staless_ds_1_port_type_1 = function (context) { return 'INPUT'; }

xcp.expression.Generated.relyins_inbox_inbox_input_first_name_1 = function (context) { return this.getValueFromWidget(context,'text_input','value'); }

xcp.expression.Generated.relyins_inbox_inbox_input_make_1 = function (context) { return this.getValueFromWidget(context,'text_input1','value'); }

xcp.expression.Generated.relyins_inbox_results_list_column_dataIndex_1 = function (context) { return '<h3>' + this.getValueFromModel(context,'relyins_inbox_outputs','packagescustomerlast_name') + ', ' + this.getValueFromModel(context,'relyins_inbox_outputs','packagescustomerfirst_name') + '</h3><span style="font-family:verdana;color:#4e9ac9;">' + this.getValueFromModel(context,'relyins_inbox_outputs','packagescustomerstreet') + '<br/>' + this.getValueFromModel(context,'relyins_inbox_outputs','packagescustomercity') + ', ' + this.getValueFromModel(context,'relyins_inbox_outputs','packagescustomerstate') + ' ' + this.getValueFromModel(context,'relyins_inbox_outputs','packagescustomerzip') + '</span><h3>'; }

xcp.expression.Generated.relyins_manager_welcome_column_box7_hidden_1 = function (context) { return xcp.functions.length(this.getValueFromSelectionModel(context,'agent_list','agents')) == 0; }

xcp.expression.Generated.relyins_manager_welcome_column_box8_hidden_1 = function (context) { return xcp.functions.length(this.getValueFromSelectionModel(context,'agent_list','agents')) == 0; }

xcp.expression.Generated.relyins_manager_welcome_report_manager_ag_1_initiate_staless_ds_agent_name_1 = function (context) { return this.getValueFromSelectionModel(context,'agent_list','agents'); }

xcp.expression.Generated.relyins_manager_welcome_report_manager_ag_2_initiate_staless_ds_agent_name_1 = function (context) { return this.getValueFromSelectionModel(context,'agent_list','agents'); }

xcp.expression.Generated.relyins_manager_welcome_rich_text1_hidden_1 = function (context) { return xcp.functions.length(this.getValueFromSelectionModel(context,'agent_list','agents')) != 0; }

xcp.expression.Generated.relyins_manager_welcome_rich_text_hidden_1 = function (context) { return xcp.functions.length(this.getValueFromSelectionModel(context,'agent_list','agents')) != 0; }

xcp.expression.Generated.relyins_new_application_app_accident_disabled_1 = function (context) { return true; }

xcp.expression.Generated.relyins_new_application_app_body_policy_disabled_1 = function (context) { return true; }

xcp.expression.Generated.relyins_new_application_app_city_input_readOnly_1 = function (context) { return true; }

xcp.expression.Generated.relyins_new_application_app_collision_policy_disabled_1 = function (context) { return true; }

xcp.expression.Generated.relyins_new_application_app_column_box11_hidden_1 = function (context) { return true; }

xcp.expression.Generated.relyins_new_application_app_comprehensive_policy_disabled_1 = function (context) { return true; }

xcp.expression.Generated.relyins_new_application_app_coverage_input_readOnly_1 = function (context) { return true; }

xcp.expression.Generated.relyins_new_application_app_deductible_input_readOnly_1 = function (context) { return true; }

xcp.expression.Generated.relyins_new_application_app_instructions_value_1 = function (context) { return '<p style="font-family:verdana;font-size:12px;color:white;text-align:center"><b>' + this.getValueFromModel(context,'relyins_new_application_approve_or_reject_a','executionData.currenttask.instructions') + '</b></p>'; }

xcp.expression.Generated.relyins_new_application_app_insurance_declined_disabled_1 = function (context) { return true; }

xcp.expression.Generated.relyins_new_application_app_license_revoked_disabled_1 = function (context) { return true; }

xcp.expression.Generated.relyins_new_application_app_medical_policy_disabled_1 = function (context) { return true; }

xcp.expression.Generated.relyins_new_application_app_moving_violation_disabled_1 = function (context) { return true; }

xcp.expression.Generated.relyins_new_application_app_new_application_a_3_1_id_1 = function (context) { return this.getValueFromModel(context,'relyins_new_application_approve_or_reject_a','executionData.currenttask.qitem_id'); }

xcp.expression.Generated.relyins_new_application_app_new_application_a_3_1_processPackages_policy_approval_1 = function (context) { return 'Approved'; }

xcp.expression.Generated.relyins_new_application_app_new_application_a_3_1_processPackages_policy_id_1 = function (context) { return this.getValueFromModel(context,'relyins_new_application_approve_or_reject_a','processPackages.policy.id'); }

xcp.expression.Generated.relyins_new_application_app_new_application_a_3_2_id_1 = function (context) { return this.getValueFromModel(context,'relyins_new_application_approve_or_reject_a','executionData.currenttask.qitem_id'); }

xcp.expression.Generated.relyins_new_application_app_new_application_a_3_2_processPackages_policy_approval_1 = function (context) { return 'Rejected'; }

xcp.expression.Generated.relyins_new_application_app_new_application_a_3_2_processPackages_policy_id_1 = function (context) { return this.getValueFromModel(context,'relyins_new_application_approve_or_reject_a','processPackages.policy.id'); }

xcp.expression.Generated.relyins_new_application_app_new_no_hidden_1 = function (context) { return this.getValueFromModel(context,'relyins_new_application_approve_or_reject_a','processVariables.new_vehicle') == true; }

xcp.expression.Generated.relyins_new_application_app_new_no_value_1 = function (context) { return 'No'; }

xcp.expression.Generated.relyins_new_application_app_new_yes_hidden_1 = function (context) { return this.getValueFromModel(context,'relyins_new_application_approve_or_reject_a','processVariables.new_vehicle') == false; }

xcp.expression.Generated.relyins_new_application_app_new_yes_value_1 = function (context) { return 'Yes'; }

xcp.expression.Generated.relyins_new_application_app_payment_policy_value_1 = function (context) { return '<p style="font-family:verdana;font-size:20px;color:white">' + this.getValueFromModel(context,'relyins_new_application_approve_or_reject_a','processPackages.policy.monthly_payment_float') + ' €</p>'; }

xcp.expression.Generated.relyins_new_application_app_physical_impairment_disabled_1 = function (context) { return true; }

xcp.expression.Generated.relyins_new_application_app_property_policy_disabled_1 = function (context) { return true; }

xcp.expression.Generated.relyins_new_application_app_rich_text_hidden_1 = function (context) { return this.getValueFromModel(context,'relyins_new_application_approve_or_reject_a','processPackages.customer.risk') != 0; }

xcp.expression.Generated.relyins_new_application_app_state_input_readOnly_1 = function (context) { return true; }

xcp.expression.Generated.relyins_new_application_app_state_value_1 = function (context) { return '<p style="font-family:verdana;font-size:12px;color:white">' + this.getValueFromModel(context,'relyins_new_application_approve_or_reject_a','executionData.currenttask.task_subject') + '</p>'; }

xcp.expression.Generated.relyins_new_application_app_street_input_readOnly_1 = function (context) { return true; }

xcp.expression.Generated.relyins_new_application_app_value_display14_value_1 = function (context) { return '<iframe align="center" width="625" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=' + this.getValueFromWidget(context,'street_input','value') + ' ' + this.getValueFromWidget(context,'city_input','value') + ' ' + this.getValueFromWidget(context,'zip_input','value') + ' ' + this.getValueFromWidget(context,'state_input','value') + '&amp;aq=0&amp;t=h&amp;ie=UTF8&amp;hq=&amp;hnear=' + this.getValueFromWidget(context,'street_input','value') + ' ' + this.getValueFromWidget(context,'city_input','value') + ' ' + this.getValueFromWidget(context,'zip_input','value') + ' ' + this.getValueFromWidget(context,'state_input','value') + '&amp;iwloc=near&amp;z=18&amp;output=embed"></iframe>'; }

xcp.expression.Generated.relyins_new_application_app_value_display4_hidden_1 = function (context) { return this.getValueFromModel(context,'relyins_new_application_approve_or_reject_a','processPackages.customer.risk') == 0; }

xcp.expression.Generated.relyins_new_application_app_value_display4_value_1 = function (context) { return '<div style="position:relative;"><img style="height:140px" src="Artifacts/Resources/Gauge.png"/><p style="font-family:verdana;font-size:80px;color:white;position:absolute;top:15px;left:20px">' + this.getValueFromModel(context,'relyins_new_application_approve_or_reject_a','processPackages.customer.risk') + '</p>'; }

xcp.expression.Generated.relyins_new_application_app_value_display5_value_1 = function (context) { return '<img src="Artifacts/Resources/Vehicles/' + this.getValueFromWidget(context,'value_display15','value') + '_' + this.getValueFromWidget(context,'value_display16','value') + '.png"height="100"/>'; }

xcp.expression.Generated.relyins_new_application_app_viewer_contentType_1 = function (context) { return 'pdf'; }

xcp.expression.Generated.relyins_new_application_app_viewer_objectId_1 = function (context) { return this.getValueFromModel(context,'relyins_new_application_approve_or_reject_a','processPackages.application_form.id'); }

xcp.expression.Generated.relyins_new_application_app_zip_input_readOnly_1 = function (context) { return true; }

xcp.expression.Generated.relyins_new_application_ini_button_hidden_1 = function (context) { return this.getValueFromWidget(context,'new_customer','value') == false; }

xcp.expression.Generated.relyins_new_application_ini_column_box1_hidden_1 = function (context) { return this.getValueFromWidget(context,'new_customer','value') == false; }

xcp.expression.Generated.relyins_new_application_ini_column_box3_hidden_1 = function (context) { return this.getValueFromWidget(context,'new_customer','value') == true; }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_1_processPackages_application_form_id_1 = function (context) { return this.getValueFromWidget(context,'selector','value'); }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_1_processPackages_customer_id_1 = function (context) { return this.getValueFromWidget(context,'selector1','value'); }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_1_processPackages_vehicle_id_1 = function (context) { return this.getValueFromSelectionModel(context,'vehicles_list','id'); }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_1_processVariables_license_1 = function (context) { return this.getValueFromWidget(context,'license_input','value'); }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_1_processVariables_mileage_1 = function (context) { return this.getValueFromWidget(context,'mileage_input','value'); }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_1_processVariables_new_vehicle_1 = function (context) { return this.getValueFromWidget(context,'new_vehicle','value'); }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_1_processVariables_vin_1 = function (context) { return this.getValueFromWidget(context,'vin_input','value'); }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_processPackages_application_form_id_1 = function (context) { return this.getValueFromWidget(context,'selector','value'); }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_processPackages_customer_birth_date_1 = function (context) { return this.getValueFromWidget(context,'birth_date_input','value'); }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_processPackages_customer_city_1 = function (context) { return this.getValueFromWidget(context,'city_input','value'); }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_processPackages_customer_driver_license_1 = function (context) { return this.getValueFromWidget(context,'license_input','value'); }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_processPackages_customer_email_1 = function (context) { return this.getValueFromWidget(context,'email_input','value'); }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_processPackages_customer_first_name_1 = function (context) { return this.getValueFromWidget(context,'first_name_input','value'); }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_processPackages_customer_had_accident_1 = function (context) { return this.getValueFromWidget(context,'accident','value'); }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_processPackages_customer_had_insurance_declined_1 = function (context) { return this.getValueFromWidget(context,'insurance','value'); }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_processPackages_customer_had_license_revoked_1 = function (context) { return this.getValueFromWidget(context,'license','value'); }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_processPackages_customer_had_mental_impairments_1 = function (context) { return this.getValueFromWidget(context,'impairment','value'); }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_processPackages_customer_had_moving_violation_1 = function (context) { return this.getValueFromWidget(context,'violation','value'); }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_processPackages_customer_last_name_1 = function (context) { return this.getValueFromWidget(context,'last_name_input','value'); }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_processPackages_customer_object_name_1 = function (context) { return this.getValueFromWidget(context,'first_name_input','value') + ' ' + this.getValueFromWidget(context,'last_name_input','value'); }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_processPackages_customer_occupation_1 = function (context) { return this.getValueFromWidget(context,'occupation_input','value'); }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_processPackages_customer_phone_1 = function (context) { return this.getValueFromWidget(context,'phone_input','value'); }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_processPackages_customer_risk_1 = function (context) { return 0; }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_processPackages_customer_ssn_1 = function (context) { return this.getValueFromWidget(context,'ssn_input','value'); }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_processPackages_customer_state_1 = function (context) { return this.getValueFromWidget(context,'state_input','value'); }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_processPackages_customer_street_1 = function (context) { return this.getValueFromWidget(context,'street_input','value'); }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_processPackages_customer_zip_1 = function (context) { return this.getValueFromWidget(context,'zip_input','value'); }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_processPackages_vehicle_id_1 = function (context) { return this.getValueFromSelectionModel(context,'vehicles_list','id'); }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_processVariables_license_1 = function (context) { return this.getValueFromWidget(context,'license_plate_input','value'); }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_processVariables_mileage_1 = function (context) { return this.getValueFromWidget(context,'mileage_input','value'); }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_processVariables_new_vehicle_1 = function (context) { return this.getValueFromWidget(context,'new_vehicle','value'); }

xcp.expression.Generated.relyins_new_application_ini_da_def_create_new_application_initiate_processVariables_vin_1 = function (context) { return this.getValueFromWidget(context,'vin_input','value'); }

xcp.expression.Generated.relyins_new_application_ini_new_customer_value_1 = function (context) { return true; }

xcp.expression.Generated.relyins_new_application_ini_start_existing_customer_hidden_1 = function (context) { return this.getValueFromWidget(context,'new_customer','value') == true; }

xcp.expression.Generated.relyins_new_application_rev_column_box11_hidden_1 = function (context) { return true; }

xcp.expression.Generated.relyins_new_application_rev_column_box2_hidden_1 = function (context) { return true; }

xcp.expression.Generated.relyins_new_application_rev_da_def_invoke_stateless_processupdate_risk_assessm_initiate_customer_id_1 = function (context) { return this.getValueFromModel(context,'relyins_new_application_review_application','processPackages.customer.id'); }

xcp.expression.Generated.relyins_new_application_rev_da_def_update_new_application_manual_task_id_1 = function (context) { return this.getValueFromModel(context,'relyins_new_application_review_application','executionData.currenttask.qitem_id'); }

xcp.expression.Generated.relyins_new_application_rev_da_def_update_new_application_manual_task_processPackages_customer_city_1 = function (context) { return this.getValueFromWidget(context,'city_input','value'); }

xcp.expression.Generated.relyins_new_application_rev_da_def_update_new_application_manual_task_processPackages_customer_had_accident_1 = function (context) { return this.getValueFromWidget(context,'accident','value'); }

xcp.expression.Generated.relyins_new_application_rev_da_def_update_new_application_manual_task_processPackages_customer_had_insurance_declined_1 = function (context) { return this.getValueFromWidget(context,'insurance_declined','value'); }

xcp.expression.Generated.relyins_new_application_rev_da_def_update_new_application_manual_task_processPackages_customer_had_license_revoked_1 = function (context) { return this.getValueFromWidget(context,'license_revoked','value'); }

xcp.expression.Generated.relyins_new_application_rev_da_def_update_new_application_manual_task_processPackages_customer_had_mental_impairments_1 = function (context) { return this.getValueFromWidget(context,'physical_impairment','value'); }

xcp.expression.Generated.relyins_new_application_rev_da_def_update_new_application_manual_task_processPackages_customer_had_moving_violation_1 = function (context) { return this.getValueFromWidget(context,'moving_violation','value'); }

xcp.expression.Generated.relyins_new_application_rev_da_def_update_new_application_manual_task_processPackages_customer_id_1 = function (context) { return this.getValueFromModel(context,'relyins_new_application_review_application','processPackages.customer.id'); }

xcp.expression.Generated.relyins_new_application_rev_da_def_update_new_application_manual_task_processPackages_customer_state_1 = function (context) { return this.getValueFromWidget(context,'state_input','value'); }

xcp.expression.Generated.relyins_new_application_rev_da_def_update_new_application_manual_task_processPackages_customer_street_1 = function (context) { return this.getValueFromWidget(context,'street_input','value'); }

xcp.expression.Generated.relyins_new_application_rev_da_def_update_new_application_manual_task_processPackages_customer_zip_1 = function (context) { return this.getValueFromWidget(context,'zip_input','value'); }

xcp.expression.Generated.relyins_new_application_rev_da_def_update_new_application_manual_task_processPackages_policy_bodily_injury_1 = function (context) { return this.getValueFromWidget(context,'body_policy','value'); }

xcp.expression.Generated.relyins_new_application_rev_da_def_update_new_application_manual_task_processPackages_policy_collision_1 = function (context) { return this.getValueFromWidget(context,'collision_policy','value'); }

xcp.expression.Generated.relyins_new_application_rev_da_def_update_new_application_manual_task_processPackages_policy_comprehensive_1 = function (context) { return this.getValueFromWidget(context,'comprehensive_policy','value'); }

xcp.expression.Generated.relyins_new_application_rev_da_def_update_new_application_manual_task_processPackages_policy_deductible_1 = function (context) { return this.getValueFromWidget(context,'deductible_input','value'); }

xcp.expression.Generated.relyins_new_application_rev_da_def_update_new_application_manual_task_processPackages_policy_id_1 = function (context) { return this.getValueFromModel(context,'relyins_new_application_review_application','processPackages.policy.id'); }

xcp.expression.Generated.relyins_new_application_rev_da_def_update_new_application_manual_task_processPackages_policy_medical_payments_1 = function (context) { return this.getValueFromWidget(context,'medical_policy','value'); }

xcp.expression.Generated.relyins_new_application_rev_da_def_update_new_application_manual_task_processPackages_policy_monthly_payment_float_1 = function (context) { return this.getValueFromWidget(context,'payment_input','value'); }

xcp.expression.Generated.relyins_new_application_rev_da_def_update_new_application_manual_task_processPackages_policy_property_damage_1 = function (context) { return this.getValueFromWidget(context,'property_policy','value'); }

xcp.expression.Generated.relyins_new_application_rev_da_def_update_new_application_manual_task_processPackages_policy_total_coverage_1 = function (context) { return this.getValueFromWidget(context,'coverage_input','value'); }

xcp.expression.Generated.relyins_new_application_rev_instructions_value_1 = function (context) { return '<p style="font-family:verdana;font-size:12px;color:white;text-align:center"><b>' + this.getValueFromModel(context,'relyins_new_application_review_application','executionData.currenttask.instructions') + '</b></p>'; }

xcp.expression.Generated.relyins_new_application_rev_new_application_r_2_1_id_1 = function (context) { return this.getValueFromModel(context,'relyins_new_application_review_application','executionData.currenttask.qitem_id'); }

xcp.expression.Generated.relyins_new_application_rev_new_application_r_2_1_processPackages_customer_city_1 = function (context) { return this.getValueFromWidget(context,'city_input','value'); }

xcp.expression.Generated.relyins_new_application_rev_new_application_r_2_1_processPackages_customer_had_accident_1 = function (context) { return this.getValueFromWidget(context,'accident','value'); }

xcp.expression.Generated.relyins_new_application_rev_new_application_r_2_1_processPackages_customer_had_insurance_declined_1 = function (context) { return this.getValueFromWidget(context,'insurance_declined','value'); }

xcp.expression.Generated.relyins_new_application_rev_new_application_r_2_1_processPackages_customer_had_license_revoked_1 = function (context) { return this.getValueFromWidget(context,'license_revoked','value'); }

xcp.expression.Generated.relyins_new_application_rev_new_application_r_2_1_processPackages_customer_had_mental_impairments_1 = function (context) { return this.getValueFromWidget(context,'physical_impairment','value'); }

xcp.expression.Generated.relyins_new_application_rev_new_application_r_2_1_processPackages_customer_had_moving_violation_1 = function (context) { return this.getValueFromWidget(context,'moving_violation','value'); }

xcp.expression.Generated.relyins_new_application_rev_new_application_r_2_1_processPackages_customer_id_1 = function (context) { return this.getValueFromModel(context,'relyins_new_application_review_application','processPackages.customer.id'); }

xcp.expression.Generated.relyins_new_application_rev_new_application_r_2_1_processPackages_customer_state_1 = function (context) { return this.getValueFromWidget(context,'state_input','value'); }

xcp.expression.Generated.relyins_new_application_rev_new_application_r_2_1_processPackages_customer_street_1 = function (context) { return this.getValueFromWidget(context,'street_input','value'); }

xcp.expression.Generated.relyins_new_application_rev_new_application_r_2_1_processPackages_customer_zip_1 = function (context) { return this.getValueFromWidget(context,'zip_input','value'); }

xcp.expression.Generated.relyins_new_application_rev_new_application_r_2_1_processPackages_policy_bodily_injury_1 = function (context) { return this.getValueFromWidget(context,'body_policy','value'); }

xcp.expression.Generated.relyins_new_application_rev_new_application_r_2_1_processPackages_policy_collision_1 = function (context) { return this.getValueFromWidget(context,'collision_policy','value'); }

xcp.expression.Generated.relyins_new_application_rev_new_application_r_2_1_processPackages_policy_comprehensive_1 = function (context) { return this.getValueFromWidget(context,'comprehensive_policy','value'); }

xcp.expression.Generated.relyins_new_application_rev_new_application_r_2_1_processPackages_policy_deductible_1 = function (context) { return this.getValueFromWidget(context,'deductible_input','value'); }

xcp.expression.Generated.relyins_new_application_rev_new_application_r_2_1_processPackages_policy_id_1 = function (context) { return this.getValueFromModel(context,'relyins_new_application_review_application','processPackages.policy.id'); }

xcp.expression.Generated.relyins_new_application_rev_new_application_r_2_1_processPackages_policy_medical_payments_1 = function (context) { return this.getValueFromWidget(context,'medical_policy','value'); }

xcp.expression.Generated.relyins_new_application_rev_new_application_r_2_1_processPackages_policy_monthly_payment_float_1 = function (context) { return this.getValueFromWidget(context,'payment_input','value'); }

xcp.expression.Generated.relyins_new_application_rev_new_application_r_2_1_processPackages_policy_property_damage_1 = function (context) { return this.getValueFromWidget(context,'property_policy','value'); }

xcp.expression.Generated.relyins_new_application_rev_new_application_r_2_1_processPackages_policy_total_coverage_1 = function (context) { return this.getValueFromWidget(context,'coverage_input','value'); }

xcp.expression.Generated.relyins_new_application_rev_new_no_hidden_1 = function (context) { return this.getValueFromModel(context,'relyins_new_application_review_application','processVariables.new_vehicle') == true; }

xcp.expression.Generated.relyins_new_application_rev_new_no_value_1 = function (context) { return 'No'; }

xcp.expression.Generated.relyins_new_application_rev_new_yes_hidden_1 = function (context) { return this.getValueFromModel(context,'relyins_new_application_review_application','processVariables.new_vehicle') == false; }

xcp.expression.Generated.relyins_new_application_rev_new_yes_value_1 = function (context) { return 'Yes'; }

xcp.expression.Generated.relyins_new_application_rev_payment_input_value_1 = function (context) { return xcp.functions.round(20 + (xcp.functions.countTrue(this.getValueFromWidget(context,'body_policy','value'), this.getValueFromWidget(context,'property_policy','value'), this.getValueFromWidget(context,'medical_policy','value'), this.getValueFromWidget(context,'comprehensive_policy','value'), this.getValueFromWidget(context,'collision_policy','value')) + xcp.functions.countTrue(this.getValueFromWidget(context,'insurance_declined','value'), this.getValueFromWidget(context,'physical_impairment','value'), this.getValueFromWidget(context,'license_revoked','value'), this.getValueFromWidget(context,'moving_violation','value'), this.getValueFromWidget(context,'accident','value'))) * 0.7 * (this.getValueFromWidget(context,'coverage_input','value') / 3000) * (1 + (1000 - this.getValueFromWidget(context,'deductible_input','value')) / 1000) * (0.023 * this.getValueFromModel(context,'relyins_new_application_review_application','processPackages.customer.risk') + 0.727), 2); }

xcp.expression.Generated.relyins_new_application_rev_payment_policy_value_1 = function (context) { return '<p style="font-family:verdana;font-size:20px;color:white">' + this.getValueFromWidget(context,'payment_input','value') + ' €</p>'; }

xcp.expression.Generated.relyins_new_application_rev_rich_text_hidden_1 = function (context) { return this.getValueFromModel(context,'relyins_new_application_review_application','processPackages.customer.risk') != 0; }

xcp.expression.Generated.relyins_new_application_rev_state_value_1 = function (context) { return '<p style="font-family:verdana;font-size:12px;color:white">' + this.getValueFromModel(context,'relyins_new_application_review_application','executionData.currenttask.task_subject') + '</p>'; }

xcp.expression.Generated.relyins_new_application_rev_value_display14_value_1 = function (context) { return '<iframe align="center" width="625" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=' + this.getValueFromWidget(context,'street_input','value') + ' ' + this.getValueFromWidget(context,'city_input','value') + ' ' + this.getValueFromWidget(context,'zip_input','value') + ' ' + this.getValueFromWidget(context,'state_input','value') + '&amp;aq=0&amp;t=h&amp;ie=UTF8&amp;hq=&amp;hnear=' + this.getValueFromWidget(context,'street_input','value') + ' ' + this.getValueFromWidget(context,'city_input','value') + ' ' + this.getValueFromWidget(context,'zip_input','value') + ' ' + this.getValueFromWidget(context,'state_input','value') + '&amp;iwloc=near&amp;z=18&amp;output=embed"></iframe>'; }

xcp.expression.Generated.relyins_new_application_rev_value_display19_value_1 = function (context) { return '<img src="Artifacts/Resources/Vehicles/' + this.getValueFromModel(context,'relyins_new_application_review_application','processPackages.vehicle.make') + '_' + this.getValueFromModel(context,'relyins_new_application_review_application','processPackages.vehicle.model') + '.png"height="100"/>'; }

xcp.expression.Generated.relyins_new_application_rev_value_display4_hidden_1 = function (context) { return this.getValueFromModel(context,'relyins_new_application_review_application','processPackages.customer.risk') == 0; }

xcp.expression.Generated.relyins_new_application_rev_value_display4_value_1 = function (context) { return '<div style="position:relative;"><img style="height:140px" src="Artifacts/Resources/Gauge.png"/><p style="font-family:verdana;font-size:80px;color:white;position:absolute;top:15px;left:20px">' + this.getValueFromModel(context,'relyins_new_application_review_application','processPackages.customer.risk') + '</p>'; }

xcp.expression.Generated.relyins_new_application_rev_viewer_contentType_1 = function (context) { return 'pdf'; }

xcp.expression.Generated.relyins_new_application_rev_viewer_objectId_1 = function (context) { return this.getValueFromModel(context,'relyins_new_application_review_application','processPackages.application_form.id'); }

xcp.expression.Generated.relyins_reject_activity_activity_list_initiate_staless_ds_1_id_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }

xcp.expression.Generated.relyins_reject_activity_activity_list_initiate_staless_ds_1_port_type_1 = function (context) { return 'REVERT'; }

xcp.expression.Generated.relyins_reject_activity_multi_activity_list_initiate_staless_ds_1_id_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }

xcp.expression.Generated.relyins_reject_activity_multi_activity_list_initiate_staless_ds_1_port_type_1 = function (context) { return 'REVERT'; }

xcp.expression.Generated.relyins_select_customer_ste_search_customer_input_last_name_1 = function (context) { return this.getValueFromWidget(context,'text_input','value'); }

xcp.expression.Generated.relyins_selector_content_st_content_rt_query_input_contenttype_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('contenttype'); }

xcp.expression.Generated.relyins_selector_content_st_content_rt_query_input_name_1 = function (context) { return this.getValueFromWidget(context,'text_input','value'); }

xcp.expression.Generated.relyins_selector_folder_ste_folder_rt_query_1_input_folder_id_1 = function (context) { return this.getValueFromWidget(context,'text_input','value'); }

xcp.expression.Generated.relyins_signoff_forward_multi_activity_list_initiate_staless_ds_1_id_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }

xcp.expression.Generated.relyins_signoff_forward_multi_activity_list_initiate_staless_ds_1_port_type_1 = function (context) { return 'INPUT'; }

xcp.expression.Generated.relyins_signoff_forward_one_activity_list_initiate_staless_ds_1_id_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }

xcp.expression.Generated.relyins_signoff_forward_one_activity_list_initiate_staless_ds_1_port_type_1 = function (context) { return 'INPUT'; }

xcp.expression.Generated.relyins_signoff_reject_multi_activity_list_initiate_staless_ds_1_id_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }

xcp.expression.Generated.relyins_signoff_reject_multi_activity_list_initiate_staless_ds_1_port_type_1 = function (context) { return 'REVERT'; }

xcp.expression.Generated.relyins_signoff_reject_one_activity_list_initiate_staless_ds_1_id_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }

xcp.expression.Generated.relyins_signoff_reject_one_activity_list_initiate_staless_ds_1_port_type_1 = function (context) { return 'REVERT'; }

xcp.expression.Generated.relyins_user_from_queue_user_from_queue_initiate_staless_ds_1_id_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }

xcp.expression.Generated.relyins_user_preferences_column_box3_hidden_1 = function (context) { return this.getValueFromWidget(context,'delegate_task','value') != true; }

xcp.expression.Generated.relyins_user_preferences_delegateToUser_disabled_1 = function (context) { return this.getValueFromWidget(context,'delegate_task','value') != true; }

xcp.expression.Generated.relyins_user_preferences_delegateToUser_hidden_1 = function (context) { return this.getValueFromWidget(context,'delegate_task','value') != true; }

xcp.expression.Generated.relyins_vehicle_inventory_all_manufacturers_input_name_1 = function (context) { return this.getValueFromWidget(context,'filter_manuf_input','value'); }

xcp.expression.Generated.relyins_vehicle_inventory_column_box4_hidden_1 = function (context) { return xcp.functions.length(this.getValueFromSelectionModel(context,'vehicles_list','make')) == 0; }

xcp.expression.Generated.relyins_vehicle_inventory_da_def_create_manufacturer_object_name_1 = function (context) { return this.getValueFromWidget(context,'manuf_name','value'); }

xcp.expression.Generated.relyins_vehicle_inventory_da_def_create_vehicle_body_type_1 = function (context) { return this.getValueFromWidget(context,'body_type','value'); }

xcp.expression.Generated.relyins_vehicle_inventory_da_def_create_vehicle_make_1 = function (context) { return this.getValueFromWidget(context,'manuf_for_vehicle','value'); }

xcp.expression.Generated.relyins_vehicle_inventory_da_def_create_vehicle_model_1 = function (context) { return this.getValueFromWidget(context,'model_input','value'); }

xcp.expression.Generated.relyins_vehicle_inventory_da_def_create_vehicle_msrp_1 = function (context) { return this.getValueFromWidget(context,'msrp_input','value'); }

xcp.expression.Generated.relyins_vehicle_inventory_da_def_create_vehicle_object_name_1 = function (context) { return this.getValueFromWidget(context,'manuf_for_vehicle','value') + '-' + this.getValueFromWidget(context,'model_input','value'); }

xcp.expression.Generated.relyins_vehicle_inventory_da_def_create_vehicle_rating_1 = function (context) { return this.getValueFromWidget(context,'rating_display','value'); }

xcp.expression.Generated.relyins_vehicle_inventory_da_def_create_vehicle_year_1 = function (context) { return this.getValueFromWidget(context,'year_input','value'); }

xcp.expression.Generated.relyins_vehicle_inventory_rating_display_hidden_1 = function (context) { return xcp.functions.length(this.getValueFromWidget(context,'rating_list','value')) == 0; }

xcp.expression.Generated.relyins_vehicle_inventory_rating_display_value_1 = function (context) { return this.getValueFromWidget(context,'rating_list','value'); }

xcp.expression.Generated.relyins_vehicle_inventory_rating_list_hidden_1 = function (context) { return xcp.functions.length(this.getValueFromWidget(context,'rating_display','value')) != 0; }

xcp.expression.Generated.relyins_vehicle_inventory_results_list_page_link_column1_dataIndex_1 = function (context) { return this.getValueFromModel(context,'relyins_search_vehicle_outputs','make') + '-' + this.getValueFromModel(context,'relyins_search_vehicle_outputs','model'); }

xcp.expression.Generated.relyins_vehicle_inventory_search_vehicle_input_make_1 = function (context) { return this.getValueFromSelectionModel(context,'manufacturers_list','object_name'); }

xcp.expression.Generated.relyins_vehicle_inventory_value_display1_value_1 = function (context) { return this.getValueFromSelectionModel(context,'vehicles_list','year'); }

xcp.expression.Generated.relyins_vehicle_inventory_value_display2_value_1 = function (context) { return this.getValueFromSelectionModel(context,'vehicles_list','rating'); }

xcp.expression.Generated.relyins_vehicle_inventory_value_display3_value_1 = function (context) { return this.getValueFromSelectionModel(context,'vehicles_list','msrp'); }

xcp.expression.Generated.relyins_vehicle_inventory_value_display4_value_1 = function (context) { return this.getValueFromSelectionModel(context,'vehicles_list','body_type'); }

xcp.expression.Generated.relyins_vehicle_inventory_value_display_value_1 = function (context) { return '<img src="Artifacts/Resources/Vehicles/' + this.getValueFromSelectionModel(context,'vehicles_list','make') + '_' + this.getValueFromSelectionModel(context,'vehicles_list','model') + '.png"height="80"/>'; }

xcp.expression.Generated.relyins_view_base_content_comments_objectId_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_document','id'); }

xcp.expression.Generated.relyins_view_base_content_da_def_delete_dm_document_id_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_document','id'); }

xcp.expression.Generated.relyins_view_base_content_r_lock_owner_hidden_1 = function (context) { return xcp.functions.length(this.getValueFromModel(context,'xcp_dm_document','r_lock_owner')) == 0; }

xcp.expression.Generated.relyins_view_base_content_r_lock_owner_value_1 = function (context) { return xcp.functions.lockStatus(this.getValueFromModel(context,'xcp_dm_document','r_lock_date'), this.getValueFromModel(context,'xcp_dm_document','r_lock_owner')); }

xcp.expression.Generated.relyins_view_base_content_viewer_contentType_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_document','a_content_type'); }

xcp.expression.Generated.relyins_view_base_content_viewer_objectId_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_document','id'); }

xcp.expression.Generated.relyins_view_base_folder1_da_def_delete_dm_folder_id_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_folder','id'); }

xcp.expression.Generated.relyins_view_base_folder1_folderQuery_folder_id_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_folder','id'); }

xcp.expression.Generated.relyins_view_base_folder2_da_def_delete_dm_folder_id_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_folder','id'); }

xcp.expression.Generated.relyins_view_base_folder2_folderQuery_folder_id_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_folder','id'); }

xcp.expression.Generated.relyins_view_base_folder3_da_def_delete_dm_folder_id_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_folder','id'); }

xcp.expression.Generated.relyins_view_base_folder3_folderQuery_folder_id_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_folder','id'); }

xcp.expression.Generated.relyins_view_base_folder4_da_def_delete_dm_folder_id_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_folder','id'); }

xcp.expression.Generated.relyins_view_base_folder4_folderQuery_folder_id_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_folder','id'); }

xcp.expression.Generated.relyins_view_base_folder_da_def_delete_dm_folder_id_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_folder','id'); }

xcp.expression.Generated.relyins_view_base_folder_folderQuery_folder_id_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_folder','id'); }

xcp.expression.Generated.relyins_view_customer_accident_no_hidden_1 = function (context) { return this.getValueFromModel(context,'relyins_customer','had_accident') == true; }

xcp.expression.Generated.relyins_view_customer_accident_no_value_1 = function (context) { return 'No'; }

xcp.expression.Generated.relyins_view_customer_accident_yes_hidden_1 = function (context) { return this.getValueFromModel(context,'relyins_customer','had_accident') == false; }

xcp.expression.Generated.relyins_view_customer_accident_yes_value_1 = function (context) { return 'Yes'; }

xcp.expression.Generated.relyins_view_customer_add_a_vehicle_1_id_1 = function (context) { return this.getValueFromModel(context,'relyins_customer','id'); }

xcp.expression.Generated.relyins_view_customer_approval_status_value_1 = function (context) { return this.getValueFromDataSourceActionModel(context,'related_policy_info_initiate_staless_ds','approval'); }

xcp.expression.Generated.relyins_view_customer_brand_new_no_hidden_1 = function (context) { return this.getValueFromSelectionModel(context,'owned_cars_list','new_vehicle') == true; }

xcp.expression.Generated.relyins_view_customer_brand_new_no_value_1 = function (context) { return 'No'; }

xcp.expression.Generated.relyins_view_customer_brand_new_yes_hidden_1 = function (context) { return this.getValueFromSelectionModel(context,'owned_cars_list','new_vehicle') == false; }

xcp.expression.Generated.relyins_view_customer_brand_new_yes_value_1 = function (context) { return 'Yes'; }

xcp.expression.Generated.relyins_view_customer_checkbox1_disabled_1 = function (context) { return true; }

xcp.expression.Generated.relyins_view_customer_checkbox1_value_1 = function (context) { return this.getValueFromDataSourceActionModel(context,'related_policy_info_initiate_staless_ds','body'); }

xcp.expression.Generated.relyins_view_customer_checkbox2_disabled_1 = function (context) { return true; }

xcp.expression.Generated.relyins_view_customer_checkbox2_value_1 = function (context) { return this.getValueFromDataSourceActionModel(context,'related_policy_info_initiate_staless_ds','property'); }

xcp.expression.Generated.relyins_view_customer_checkbox3_disabled_1 = function (context) { return true; }

xcp.expression.Generated.relyins_view_customer_checkbox3_value_1 = function (context) { return this.getValueFromDataSourceActionModel(context,'related_policy_info_initiate_staless_ds','medical'); }

xcp.expression.Generated.relyins_view_customer_checkbox4_disabled_1 = function (context) { return true; }

xcp.expression.Generated.relyins_view_customer_checkbox4_value_1 = function (context) { return this.getValueFromDataSourceActionModel(context,'related_policy_info_initiate_staless_ds','comprehensive'); }

xcp.expression.Generated.relyins_view_customer_checkbox5_disabled_1 = function (context) { return true; }

xcp.expression.Generated.relyins_view_customer_checkbox5_value_1 = function (context) { return this.getValueFromDataSourceActionModel(context,'related_policy_info_initiate_staless_ds','collision'); }

xcp.expression.Generated.relyins_view_customer_column_box11_hidden_1 = function (context) { return this.getValueFromModel(context,'relyins_customer','telematic_1') != 0; }

xcp.expression.Generated.relyins_view_customer_column_box15_hidden_1 = function (context) { return xcp.functions.length(this.getValueFromWidget(context,'for_vehicle_show_policy','value')) == 0; }

xcp.expression.Generated.relyins_view_customer_column_box16_hidden_1 = function (context) { return this.getValueFromModel(context,'relyins_customer','telematic_1') == 0; }

xcp.expression.Generated.relyins_view_customer_column_box22_hidden_1 = function (context) { return xcp.functions.length(this.getValueFromSelectionModel(context,'owned_cars_list','child_vehiclemake')) == 0; }

xcp.expression.Generated.relyins_view_customer_column_box25_hidden_1 = function (context) { return this.getValueFromModel(context,'relyins_customer','telematic_1') != 0; }

xcp.expression.Generated.relyins_view_customer_column_box26_hidden_1 = function (context) { return this.getValueFromModel(context,'relyins_customer','telematic_1') == 0; }

xcp.expression.Generated.relyins_view_customer_da_def_invoke_stateless_processupdate_risk_assessm_initiate_customer_id_1 = function (context) { return this.getValueFromModel(context,'relyins_customer','id'); }

xcp.expression.Generated.relyins_view_customer_da_def_invoke_stateless_processupdate_telematic_initiate_customer_id_1 = function (context) { return this.getValueFromModel(context,'relyins_customer','id'); }

xcp.expression.Generated.relyins_view_customer_impairment_no_hidden_1 = function (context) { return this.getValueFromModel(context,'relyins_customer','had_mental_impairments') == true; }

xcp.expression.Generated.relyins_view_customer_impairment_no_value_1 = function (context) { return 'No'; }

xcp.expression.Generated.relyins_view_customer_impairment_yes_hidden_1 = function (context) { return this.getValueFromModel(context,'relyins_customer','had_mental_impairments') == false; }

xcp.expression.Generated.relyins_view_customer_impairment_yes_value_1 = function (context) { return 'Yes'; }

xcp.expression.Generated.relyins_view_customer_insurance_declined_no_hidden_1 = function (context) { return this.getValueFromModel(context,'relyins_customer','had_insurance_declined') == true; }

xcp.expression.Generated.relyins_view_customer_insurance_declined_no_value_1 = function (context) { return 'No'; }

xcp.expression.Generated.relyins_view_customer_insurance_declined_yes_hidden_1 = function (context) { return this.getValueFromModel(context,'relyins_customer','had_insurance_declined') == false; }

xcp.expression.Generated.relyins_view_customer_insurance_declined_yes_value_1 = function (context) { return 'Yes'; }

xcp.expression.Generated.relyins_view_customer_licence_revoked_no_hidden_1 = function (context) { return this.getValueFromModel(context,'relyins_customer','had_license_revoked') == true; }

xcp.expression.Generated.relyins_view_customer_licence_revoked_no_value_1 = function (context) { return 'No'; }

xcp.expression.Generated.relyins_view_customer_license_revoked_yes_hidden_1 = function (context) { return this.getValueFromModel(context,'relyins_customer','had_license_revoked') == false; }

xcp.expression.Generated.relyins_view_customer_license_revoked_yes_value_1 = function (context) { return 'Yes'; }

xcp.expression.Generated.relyins_view_customer_moving_violation_no_hidden_1 = function (context) { return this.getValueFromModel(context,'relyins_customer','had_moving_violation') == true; }

xcp.expression.Generated.relyins_view_customer_moving_violation_no_value_1 = function (context) { return 'No'; }

xcp.expression.Generated.relyins_view_customer_moving_violation_yes_hidden_1 = function (context) { return this.getValueFromModel(context,'relyins_customer','had_moving_violation') == false; }

xcp.expression.Generated.relyins_view_customer_moving_violation_yes_value_1 = function (context) { return 'Yes'; }

xcp.expression.Generated.relyins_view_customer_related_activities_input_object_id_1 = function (context) { return this.getValueFromModel(context,'relyins_customer','id'); }

xcp.expression.Generated.relyins_view_customer_related_policies_input_object_id_1 = function (context) { return this.getValueFromModel(context,'relyins_customer','id'); }

xcp.expression.Generated.relyins_view_customer_related_policy_info_initiate_staless_ds_policy_id_1 = function (context) { return this.getValueFromWidget(context,'for_vehicle_show_policy','value'); }

xcp.expression.Generated.relyins_view_customer_related_vehicles_input_object_id_1 = function (context) { return this.getValueFromModel(context,'relyins_customer','id'); }

xcp.expression.Generated.relyins_view_customer_results_list_column1_dataIndex_1 = function (context) { return this.getValueFromModel(context,'relyins_related_vehicles_outputs','child_vehiclemake') + '-' + this.getValueFromModel(context,'relyins_related_vehicles_outputs','child_vehiclemodel'); }

xcp.expression.Generated.relyins_view_customer_results_list_column4_dataIndex_1 = function (context) { return '<b>' + this.getValueFromModel(context,'relyins_related_activities_outputs','child_recent_activitydescription') + '</b>'; }

xcp.expression.Generated.relyins_view_customer_results_list_column5_dataIndex_1 = function (context) { return humanize.timeAgo(this.getValueFromModel(context,'relyins_related_activities_outputs','child_recent_activityr_creation_date')); }

xcp.expression.Generated.relyins_view_customer_results_list_page_link_column_dataIndex_1 = function (context) { return '<h3 style="text-align:center"><img src="Artifacts/Resources/' + this.getValueFromModel(context,'relyins_related_activities_outputs','child_recent_activityactivity_type') + '.png" height="30" width="30" /></h3><p style="font-family:verdana;color:#7e7e7e;white-space:normal;font-size:13px;text-align:center">' + this.getValueFromModel(context,'relyins_related_activities_outputs','child_recent_activityactivity_type') + '</p>'; }

xcp.expression.Generated.relyins_view_customer_rich_text4_hidden_1 = function (context) { return this.getValueFromModel(context,'relyins_customer','risk') != 0; }

xcp.expression.Generated.relyins_view_customer_value_display10_value_1 = function (context) { return '<div style="position:relative;"><img style="height:128px" src="Artifacts/Resources/Telematic Braking.png"/><p style="font-family:verdana;font-size:60px;color:white;position:absolute;top:24px;left:46px">' + this.getValueFromModel(context,'relyins_customer','telematic_2') + '</p></div>'; }

xcp.expression.Generated.relyins_view_customer_value_display11_value_1 = function (context) { return '<div style="position:relative;"><img style="height:128px" src="Artifacts/Resources/Telematic Cornering.png"/><p style="font-family:verdana;font-size:60px;color:white;position:absolute;top:24px;left:46px">' + this.getValueFromModel(context,'relyins_customer','telematic_3') + '</p></div>'; }

xcp.expression.Generated.relyins_view_customer_value_display12_value_1 = function (context) { return '<p style="font-family:verdana;font-size:20px;color:white">' + this.getValueFromDataSourceActionModel(context,'related_policy_info_initiate_staless_ds','deductible') + ' €</p>'; }

xcp.expression.Generated.relyins_view_customer_value_display13_value_1 = function (context) { return '<p style="font-family:verdana;font-size:20px;color:white">' + this.getValueFromDataSourceActionModel(context,'related_policy_info_initiate_staless_ds','coverage') + ' €</p>'; }

xcp.expression.Generated.relyins_view_customer_value_display14_value_1 = function (context) { return '<p style="font-family:verdana;font-size:20px;color:white">' + this.getValueFromDataSourceActionModel(context,'related_policy_info_initiate_staless_ds','payment_float') + ' €</p>'; }

xcp.expression.Generated.relyins_view_customer_value_display15_hidden_1 = function (context) { return this.getValueFromModel(context,'relyins_customer','risk') == 0; }

xcp.expression.Generated.relyins_view_customer_value_display15_value_1 = function (context) { return '<div style="position:relative;"><img style="height:140px" src="Artifacts/Resources/Gauge.png"/><p style="font-family:verdana;font-size:80px;color:white;position:absolute;top:15px;left:20px">' + this.getValueFromModel(context,'relyins_customer','risk') + '</p><br/><p style="font-family:verdana;font-size:14px;color:white;text-align:center">Risk Assessment</p></div>'; }

xcp.expression.Generated.relyins_view_customer_value_display16_value_1 = function (context) { return '<div style="position:relative;"><img style="height:128px" src="Artifacts/Resources/Telematic Speed.png"/><p style="font-family:verdana;font-size:60px;color:white;position:absolute;top:24px;left:46px">' + this.getValueFromModel(context,'relyins_customer','telematic_4') + '</p></div>'; }

xcp.expression.Generated.relyins_view_customer_value_display19_value_1 = function (context) { return '<img src="Artifacts/Resources/Vehicles/' + this.getValueFromSelectionModel(context,'owned_cars_list','child_vehiclemake') + '_' + this.getValueFromSelectionModel(context,'owned_cars_list','child_vehiclemodel') + '.png"height="100"/>'; }

xcp.expression.Generated.relyins_view_customer_value_display21_value_1 = function (context) { return this.getValueFromSelectionModel(context,'owned_cars_list','child_vehiclemsrp'); }

xcp.expression.Generated.relyins_view_customer_value_display22_value_1 = function (context) { return this.getValueFromSelectionModel(context,'owned_cars_list','vin'); }

xcp.expression.Generated.relyins_view_customer_value_display23_value_1 = function (context) { return this.getValueFromSelectionModel(context,'owned_cars_list','license_plate'); }

xcp.expression.Generated.relyins_view_customer_value_display24_value_1 = function (context) { return this.getValueFromSelectionModel(context,'owned_cars_list','mileage'); }

xcp.expression.Generated.relyins_view_customer_value_display25_value_1 = function (context) { return '<div style="position:relative;"><img style="height:128px" src="Artifacts/Resources/Telematic Night.png"/><p style="font-family:verdana;font-size:60px;color:white;position:absolute;top:24px;left:46px">' + this.getValueFromModel(context,'relyins_customer','telematic_5') + '</p></div>'; }

xcp.expression.Generated.relyins_view_customer_value_display2_value_1 = function (context) { return ' '; }

xcp.expression.Generated.relyins_view_customer_value_display3_value_1 = function (context) { return this.getValueFromSelectionModel(context,'owned_cars_list','child_vehiclebody_type'); }

xcp.expression.Generated.relyins_view_customer_value_display4_value_1 = function (context) { return '<div style="position:relative;"><img style="height:128px" src="Artifacts/Resources/Telematic Acceleration.png"/><p style="font-family:verdana;font-size:60px;color:white;position:absolute;top:24px;left:46px">' + this.getValueFromModel(context,'relyins_customer','telematic_1') + '</p></div>'; }

xcp.expression.Generated.relyins_view_customer_value_display_value_1 = function (context) { return '<iframe align="center" width="625" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=' + this.getValueFromModel(context,'relyins_customer','street') + ' ' + this.getValueFromModel(context,'relyins_customer','city') + ' ' + this.getValueFromModel(context,'relyins_customer','zip') + ' ' + this.getValueFromModel(context,'relyins_customer','state') + '&amp;aq=0&amp;t=h&amp;ie=UTF8&amp;hq=&amp;hnear=' + this.getValueFromModel(context,'relyins_customer','street') + ' ' + this.getValueFromModel(context,'relyins_customer','city') + ' ' + this.getValueFromModel(context,'relyins_customer','zip') + ' ' + this.getValueFromModel(context,'relyins_customer','state') + '&amp;iwloc=near&amp;z=18&amp;output=embed"></iframe>'; }

xcp.expression.Generated.relyins_welcome_page_results_list_column1_dataIndex_1 = function (context) { return '<p style="font-family:verdana;color:#7e7e7e;font-size:11px"><b>' + this.getValueFromModel(context,'relyins_recent_activities_outputs','description') + '</b></p>'; }

xcp.expression.Generated.relyins_welcome_page_results_list_column2_dataIndex_1 = function (context) { return '<p style="font-family:verdana;color:#7e7e7e;font-size:13px">' + this.getValueFromModel(context,'relyins_my_tasks_outputs','task_subject') + '</p>'; }

xcp.expression.Generated.relyins_welcome_page_results_list_column_dataIndex_1 = function (context) { return '<h3 style="text-align:center"><img src="Artifacts/Resources/' + this.getValueFromModel(context,'relyins_recent_activities_outputs','activity_type') + '.png" height="30" width="30" /></h3><p style="font-family:verdana;color:#7e7e7e;white-space:normal;font-size:13px;text-align:center">' + this.getValueFromModel(context,'relyins_recent_activities_outputs','activity_type') + '</p>'; }

xcp.expression.Generated.relyins_welcome_page_results_list_page_link_column1_dataIndex_1 = function (context) { return '<h3>' + this.getValueFromModel(context,'relyins_my_tasks_outputs','packagescustomerlast_name') + ', ' + this.getValueFromModel(context,'relyins_my_tasks_outputs','packagescustomerfirst_name') + '</h3><span style="font-family:verdana;color:#4e9ac9;">' + this.getValueFromModel(context,'relyins_my_tasks_outputs','packagescustomerstreet') + '<br/>' + this.getValueFromModel(context,'relyins_my_tasks_outputs','packagescustomercity') + '<br/>' + this.getValueFromModel(context,'relyins_my_tasks_outputs','packagescustomerstate') + '</span><h3>'; }

xcp.expression.Generated.relyins_welcome_page_results_list_page_link_column_dataIndex_1 = function (context) { return humanize.timeAgo(this.getValueFromModel(context,'relyins_recent_activities_outputs','r_creation_date')); }

xcp.expression.Generated.select_application_da_selection_1 = function (context) { return this.getValueFromSelectionModel(context,'results_list','id'); }

xcp.expression.Generated.select_customer_da_selection_1 = function (context) { return this.getValueFromSelectionModel(context,'results_list','id'); }

xcp.expression.Generated.selector_content_da_selection_1 = function (context) { return this.getValueFromSelectionModel(context,'results_list','id'); }

xcp.expression.Generated.selector_folder_da_selection_1 = function (context) { return this.getValueFromSelectionModel(context,'results_list','id'); }

xcp.expression.Generated.update_preferences_update_delegateToUser = function (context) { return this.getValueFromWidget(context,'delegateToUser','value'); }

xcp.expression.Generated.update_preferences_update_delegate_task = function (context) { return this.getValueFromWidget(context,'delegate_task','value'); }

xcp.expression.Generated.update_preferences_update_networkLocation = function (context) { return this.getValueFromWidget(context,'networkLocation','value'); }

xcp.expression.Generated.update_preferences_update_role = function (context) { return this.getValueFromWidget(context,'role','value'); }

xcp.expression.Generated.update_preferences_update_workflowAutoNextTask = function (context) { return this.getValueFromWidget(context,'workflowAutoNextTask','value'); }

xcp.expression.Generated.xcp_attachment_step_content_tree_folderRoot_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('folderRoot'); }

xcp.expression.Generated.xcp_hold_task_hold_until_value_1 = function (context) { return xcp.functions.addDays(xcp.functions.today(), 1); }

