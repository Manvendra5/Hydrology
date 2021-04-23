import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';
import CategoryPickerItem from '../components/CategoryPickerItem';
import colors from '../config/colors';
import FormImagePicker from '../components/forms/FormImagePicker';
import useLocation from '../hooks/useLocation';


const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please Select at least one Image.")
});

const categories =[
    { label: "Category 1", value: 1, backgroundColor: colors.pink, icon: "chart-bar-stacked"},
    { label: "Category 2", value: 2, backgroundColor: colors.tortoise, icon: "chart-pie"},
    { label: "Category 3", value: 3, backgroundColor: colors.spring, icon: "speedometer"},
];

function ListEditScreen() {
    const location=useLocation();
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                    images: []
                }}
                onSubmit={(values)=> console.log(location)}
                validationSchema={validationSchema}
            >
                <FormImagePicker name="images"/>
                <AppFormField maxLength={255} name="title" placeholder= "Title"/>
                <AppFormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="File"
                    width={120}
                />
                <AppFormPicker items={categories} name="category" numberOfColumns={3} PickerItemComponent= {CategoryPickerItem} placeholder="Category" width="50%"/>
                <AppFormField 
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        paddingTop: 10
    }
})

export default ListEditScreen;