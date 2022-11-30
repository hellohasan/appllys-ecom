import Vue from "vue";
import Card from "./Card";
import VButton from "./Button";
import CustomCard from "./CustomCard";
import Form from "vform";
import FormGroupButton from "./FormGroupButton";
import FormGroupInput from "./FormGroupInput";
import FormGroupDate from "./FormGroupDate";
import FormGroupSelect from "./FormGroupSelect";
import FormGroupToggle from "./FormGroupToggle";
import FormGroupTextarea from "./FormGroupTextarea";
import FormGroupImage from "./FormGroupImage";
import FormGroupSelectMultiple from "./FormGroupSelectMultiple";
import FormModalCreateEdit from "./FormModalCreateEdit";
import Status from "./Status";
import Errors from "./Errors";
import VueElementLoading from "vue-element-loading";

import {
  HasError,
  AlertError,
  AlertErrors,
  AlertSuccess,
} from "vform/src/components/bootstrap4";
window.Form = Form;
[
  Card,
  VButton,
  CustomCard,
  Errors,
  FormGroupButton,
  FormGroupInput,
  FormGroupDate,
  FormGroupTextarea,
  FormGroupSelect,
  FormGroupToggle,
  FormGroupImage,
  FormGroupSelectMultiple,
  FormModalCreateEdit,
  Status,
  HasError,
  AlertError,
  AlertErrors,
  AlertSuccess,
  VueElementLoading,
].forEach((Component) => {
  Vue.component(Component.name, Component);
});
