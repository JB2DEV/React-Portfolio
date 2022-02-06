import android from '../images/android-logo.png'
import c from '../images/c-logo.png'
import css from '../images/css-logo.png'
import dart from '../images/dart-logo.png'
import docker from '../images/docker-logo.png'
import enzyme from '../images/enzyme-logo.png'
import flutter from '../images/flutter-logo.png'
import git from '../images/git-logo.png'
import html from '../images/html-logo.png'
import java from '../images/java-logo.png'
import jest from '../images/jest-logo.png'
import js from '../images/js-logo.png'
import mongo from '../images/mongo-logo.png'
import php from '../images/php-logo.png'
import python from '../images/python-logo.png'
import react from '../images/react-logo.png'
import sql from '../images/sql-logo.png'
import kotlin from '../images/kotlin-logo.png'
import springboot from '../images/spring-boot-logo.jpg'
import spring from '../images/spring-logo.png'
import swagger from '../images/swagger-logo.png'
import springbatch from '../images/spring-batch-logo.png'
import junit from '../images/junit-logo.png'

export const skills = [

    {
        src: java,
        title: "Java",
        stars: 3
    },
    {
        src: springboot,
        title: "Spring\nBoot",
        stars: 3
    },
    {
        src: spring,
        title: "Spring",
        stars: 3
    },
        {
        src: sql,
        title: "SQL",
        stars: 3
    },
    {
        src: swagger,
        title: "Swagger",
        stars: 3
    },
    {
        src: springbatch,
        title: "Spring\nBatch",
        stars: 2
    },
    {
        src: junit,
        title: "JUnit",
        stars: 2
    },
    {
        src: dart,
        title: "Dart",
        stars: 3
    },
    {
        src: flutter,
        title: "Flutter",
        stars: 3
    },
    {
        src: docker,
        title: "Docker",
        stars: 2
    },
    {
        src: git,
        title: "Git",
        stars: 2
    },
    {
        src: android,
        title: "Android",
        stars: 2
    },
    {
        src: kotlin,
        title: "Kotlin",
        stars: 2
    },
    {
        src: c,
        title: "C",
        stars: 1
    },
    {
        src: html,
        title: "HTML",
        stars: 2
    },
    {
        src: css,
        title: "CSS",
        stars: 2
    },
    {
        src: enzyme,
        title: "Enzyme",
        stars: 1
    },
    {
        src: jest,
        title: "Jest",
        stars: 1
    },
    {
        src: js,
        title: "JS",
        stars: 2
    },
    {
        src: mongo,
        title: "MongoDB",
        stars: 2
    },
    {
        src: php,
        title: "PHP",
        stars: 2
    },
    {
        src: python,
        title: "Python",
        stars: 2
    },
    {
        src: react,
        title: "React",
        stars: 2
    },


].sort(function (a, b) {
    return b.stars - a.stars;
});