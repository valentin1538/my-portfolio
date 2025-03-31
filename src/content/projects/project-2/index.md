---
title: "Solencia Admin"
summary: "Solencia Admin est une application web d'administration d'aide à domicile."
date: "Mar 31 2025"
draft: false
tags:
- Laravel
- MySQL
- Eloquent ORM
status: "en cours"
---

Solencia est une solution numérique complète conçue pour faciliter la gestion des services d’aide à domicile, en connectant clients, intervenants et administrateurs.

Le panneau administratif est basé sur Laravel et inclut :

- Gestion des utilisateurs et intervenants (CRUD, rôles et permissions).
- Création et suivi des plannings via une interface interactive (FullCalendar).
- Génération et gestion des factures en PDF (Laravel PDF).
- Automatisation des tâches administratives (rappels, génération de factures) avec Laravel Queues et Redis.
- Endpoints sécurisés pour l’authentification et les échanges front-end/back-end.