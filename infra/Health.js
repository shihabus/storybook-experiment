'use strict'

class HealthCheck {

	constructor(app, servicename) {
		/**
		 * By default on production, the configuration would be to keep it out of Load balancing
		 */
		this.inLb = true;
		this.app = app;
		this.setupPingEndpoints();
	}

	setHealthCheckEndpoints(Servicename, model) {
		this.servicename = Servicename;
		this.model = model;
		var self = this;
		try {
			this.app.get("/api/" + this.servicename + "/health", function (req, res) {

				if (self.model) {
					self.model.count(function (err, count) {
						if (err) {
							res.status(404).send({
								status: "failure"
							});
						} else {
							res.send({
								status: "success",
								return: count
							});
						}
					});
				} else {
					res.send({
						status: "success",
						return: "No Data"
					});
				}
			});
		} catch (err) {
			res.status(404).send({
				status: "failure"
			});
		}
	}

	setupPingEndpoints() {
		/**
		 * Standard Ping Service
		 */
		this.app.get('/ping', function (req, res) {
			if (this.inLb) {
				res.send({
					status: "success"
				});
			} else {
				res.status(404).send({
					status: "failure"
				});
			}
		}.bind(this));

		//Take the service out of LB, set the state
		this.app.get('/outofLB', function (req, res) {
			this.inLb = false;
			res.send({
				status: "success"
			});
		}.bind(this));

		this.app.get('/inLB', function (req, res) {
			this.inLb = true;
			res.send({
				status: "success"
			});
		}.bind(this));
	}
}
module.exports = HealthCheck;