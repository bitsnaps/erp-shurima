class UrlMappings {

	static mappings = {

        								'/item'(view: 'item')
		'/api/item'(resources: 'item')
'/transacao'(view: 'transacao')
		'/api/transacao'(resources: 'transacao')
'/empresa'(view: 'empresa')
		'/api/empresa'(resources: 'empresa')
'/cliente'(view: 'cliente')
		'/api/cliente'(resources: 'cliente')
"/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view:"/index")
        "500"(view:'/error')
	}
}
