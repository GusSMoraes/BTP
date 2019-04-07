System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ServerListService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ServerListService = (function () {
                function ServerListService() {
                    this.servers = [{
                            name: 'TURNO 01',
                            ip: '01:00 - 07:00',
                            'tooltip': '',
                            'tooltipcls': 'text-success',
                            'icon': 'fa-check'
                        },
                        { name: 'TURNO 02', ip: '07:00 - 13:00', 'tooltip': '', 'tooltipcls': 'text-success', 'icon': 'fa-check' },
                        { name: 'TURNO 03', ip: '13:00 - 19:00', 'tooltip': '', 'tooltipcls': 'text-success', 'icon': 'fa-check' },
                        { name: 'TURNO 04', ip: '19:00 - 01:00', 'tooltip': '', 'tooltipcls': 'text-danger', 'icon': 'fa-warning' },
                    ];
                }
                ServerListService.prototype.add = function (value) {
                    this.servers.push(value);
                };
                ServerListService.prototype.all = function () {
                    return this.servers;
                };
                ServerListService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ServerListService);
                return ServerListService;
            }());
            exports_1("ServerListService", ServerListService);
        }
    }
});
//# sourceMappingURL=server_list.js.map