import { Header } from "../../common/Header";
import { Wrapper } from "../../common/Wrapper";
import { Button, Container, Field, Form, Input, Option, Select, Title } from "../../common/Form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addModel } from "../modelsSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddModel = () => {
  const dispatch = useDispatch();
  
  const [nameContent, setNameContent] = useState("");
  const [dateContent, setDateContent] = useState("2022-01-01");
  const [testFractionContent, setTestFractionContent] = useState(0);
  const [nTreesContent, setNTreesContent] = useState(0);
  const [interactionDepthContent, setInteractionDepthContent] = useState(0);
  const [shkrinkageContent, setShkrinkageContent] = useState(0);
  const [nMinobisinnodeContent, setNMinobisinnodeContent] = useState(0);
  const [cvFoldsContent, setCvFoldsContent] = useState(0);
  const [tresholdContent, setTresholdContent] = useState(0);
  const [statusContent, setStatusContent] = useState("new");
  
  const onFormSubmit = (event) => {
    event.preventDefault();

    if(!nameContent) {
      return;
    }

    dispatch((addModel({
      id: nanoid(),
      nazwa: nameContent,
      data_na: dateContent,
      frakcja_testowa: testFractionContent,
      n_trees: nTreesContent,
      interaction_depth: interactionDepthContent,
      shrinkage: shkrinkageContent,
      n_minobsinnode: nMinobisinnodeContent,
      cv_folds: cvFoldsContent,
      threshold: tresholdContent,
      status: statusContent,
    })));

    onFormReset(event);
    alert("Nowy model dodany pomyślnie!")
  };

  const onFormReset = (event) => {
    event.preventDefault();

    setNameContent("");
    setDateContent("2022-01-01");
    setTestFractionContent(0);
    setNTreesContent(0);
    setInteractionDepthContent(0);
    setShkrinkageContent(0);
    setNMinobisinnodeContent(0);
    setCvFoldsContent(0);
    setTresholdContent(0);
    setStatusContent(0);
  }

  return (
    <Wrapper>
      <Header>Dodaj nowy model</Header>

      <Container big>
        <Title>Wprowadź dane:</Title>
        <Form onSubmit={onFormSubmit} onReset={onFormReset}> 
          <Field moreText>
            Nazwa modelu:
            <Input 
              value={nameContent}
              onChange={({ target }) => setNameContent(target.value.trim())}
              required
            />
          </Field>

          <Field moreText>
            Data:
            <Input 
              type="date" 
              value={dateContent}
              onChange={({ target }) => setDateContent(target.value.trim())}  
            />
          </Field>

          <Field moreText>
            Frakcja testowa:
            <Input 
              type="number" 
              min="0" 
              step="0.1" 
              value={testFractionContent}
              onChange={({ target }) => setTestFractionContent(target.value.trim())}
            />
          </Field>

          <Field moreText>
            Liczba użytych drzew [n_trees]:
            <Input 
              type="number" 
              min="0" 
              step="1" 
              value={nTreesContent}
              onChange={({ target }) => setNTreesContent(target.value.trim())}
            />
          </Field>

          <Field moreText>
            Głębokość interakcji drzew [interaction_depth]:
            <Input 
              type="number" 
              min="0" 
              step="1" 
              value={interactionDepthContent}
              onChange={({ target }) => setInteractionDepthContent(target.value.trim())}
            />
          </Field>

          <Field moreText>
            Współczynnik uczenia [shrinkage]:
            <Input 
              type="number" 
              min="0" 
              step="0.001" 
              value={shkrinkageContent}
              onChange={({ target }) => setShkrinkageContent(target.value.trim())}
            />
          </Field>

          <Field moreText>
            Min. l. obserwacji [n_minobsinnode]:
            <Input 
              type="number" 
              min="0" 
              step="1" 
              value={nMinobisinnodeContent}
              onChange={({ target }) => setNMinobisinnodeContent(target.value.trim())}
            />
          </Field>

          <Field moreText>
            Cv folds:
            <Input 
              type="number" 
              min="0" 
              step="1" 
              value={cvFoldsContent}
              onChange={({ target }) => setCvFoldsContent(target.value.trim())}
            />
          </Field>

          <Field moreText>
            Threshold:
            <Input 
              type="number" 
              min="0" 
              step="0.1" 
              value={tresholdContent}
              onChange={({ target }) => setTresholdContent(target.value.trim())}
            />
          </Field>

          <Field moreText>
            Status:
            <Input 
              as="select" 
              value={statusContent}
              onChange={({ target }) => setStatusContent(target.value)}
            >
              <Option default>New</Option>
              <Option>Corrupted</Option>
              <Option>Ready</Option>
              <Option>Staging</Option>
            </Input>
          </Field>

          <Field buttons>
            <Button  centerText>Wyślij model!</Button>
            <Button type="reset" centerText>Zresetuj formularz</Button>
          </Field>
        </Form>
      </Container>

    </Wrapper>
  );
}

export default AddModel;