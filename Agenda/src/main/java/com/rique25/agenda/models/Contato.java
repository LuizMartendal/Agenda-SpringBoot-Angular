package com.rique25.agenda.models;


import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;
import org.hibernate.validator.constraints.Length;

import java.util.UUID;

@Entity
@Table(name = "contatos")
@Data
public class Contato {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Type(type = "org.hibernate.type.UUIDCharType")
    @Column(name = "id", columnDefinition = "char(36)")
    private UUID id;

    @Column
    @NotNull(message = "Nome é obrigatório")
    @NotBlank(message = "Nome não pode estar em branco")
    private String nome;

    @Column
    @Email(message = "Email mal formatado")
    @NotNull(message = "Email é obrigatório")
    private String email;

    @Length(max = 14, min = 9, message = "Número de telefone deve conter entre 9 a 14 caracteres")
    @Column
    private String numero;

    @Column
    private boolean favorito;

    @PrePersist
    private void prePersist() {
        numero = numero.replaceAll("[^\\d.]", "");
    }
}
