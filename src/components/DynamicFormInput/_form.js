export const formatterJson = 
   { 
		title:"Adición de Caja de TV Digital",
		fields:[
		{
				id: "cantidadAdicionales",
				label: "Cantidad Adicionales",
				type: "number",
				placeholder: "Cantidad",
				validator:[
					{
						name:"maxLength",
						value:10,
						message:"Tamaño máximo 10 caracteres o menos."
					},
					{
						name:"minLength",
						value:2,
						message:"Tamaño mínimo 2 caracteres o más."
					},
					{
						name:"required",
						value:true,
						message:"Seleccione el campo fecha"
					}
				],	
				rows:0, 
				options:[{}],
				format:""
		}]
	}


