package com.project.givemehand.models.entity;

/**
 *
 * Permet d'enumerer les statuts de la demande
 */
public enum Statut {

        ATTENTE("ATTENTE"), ACCEPTE("ACCEPTE"), REFUSE("REFUSE");

        private String label;

        private Statut(String lab){
            this.label = lab;
        }


}
