'use strict';

function ListCtrl($scope, UsuarioResource, usuarioList, tipoList, pageSize) {
    var self = this;
    self.usuarioList = usuarioList;
	self.tipoList = tipoList;
    self.pageSize = pageSize;
    self.page = 1;
    self.filter = {};

    $scope.$watchCollection(function() { return self.filter }, function() {
        self.reload();
    });

    self.load = function() {
        var params = {page: self.page};

        if (self.sort) {
            angular.extend(params, self.sort);
        }
		if (self.filter) {
			params.filter = self.filter
		}

        UsuarioResource.list(params).then(function(items) {
            self.usuarioList = items;
        });
    };

    self.reload = function() {
        self.page = 1;
        self.load();
    }
}

function ShowCtrl(usuario) {
    var self = this;
    self.usuario = usuario;
};

function CreateEditCtrl(usuario, tipoList ) {
    var self = this;
	self.tipoList = tipoList;
    self.usuario = usuario;
}

angular.module('erpapp.usuario.controllers', [])
    .controller('ListCtrl', ListCtrl)
    .controller('ShowCtrl', ShowCtrl)
    .controller('CreateEditCtrl', CreateEditCtrl);