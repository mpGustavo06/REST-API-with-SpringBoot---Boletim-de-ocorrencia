package com.br.utfpr.tsi.delegacia.web.api.endpoint;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.br.utfpr.tsi.delegacia.web.api.controller.BoletimFurtoController;
import com.br.utfpr.tsi.delegacia.web.api.model.BoletimFurto;
import com.br.utfpr.tsi.delegacia.web.api.repository.BoletimFurtoRepository;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.Path;

@Component
@Path("boletins")
public class BoletimFurtoEndpoint {

	@Autowired
	private BoletimFurtoController boletimFurtoController;

	@GET
	public List<BoletimFurto> listar() {
		return boletimFurtoController.listarBoletins();
	}

	@POST
	@ResponseStatus(HttpStatus.CREATED)
	public void cadastrar(@RequestBody BoletimFurto boletim) {
		boletimFurtoController.cadastrarBoletim(boletim);
	}
}
