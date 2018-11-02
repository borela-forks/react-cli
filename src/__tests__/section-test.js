// @flow strict

import * as React from "react";
import ReactCLI from "../index";

test("sections should be able to render horizontally", done => {
  ReactCLI(
    <div horizontal>
      Column 1 <br /> Column 2
    </div>,
    undefined,
    50,
    outputString => {
      expect(outputString).toMatchSnapshot();
      done();
    },
    "+"
  );
});

test("sections should be able to render vertically", done => {
  ReactCLI(
    <div>
      Row 1 <br /> Row 2
    </div>,
    undefined,
    50,
    outputString => {
      expect(outputString).toMatchSnapshot();
      done();
    },
    "+"
  );
});

test("sections should be able to align text left", done => {
  ReactCLI(
    <div align="left">Left text</div>,
    undefined,
    50,
    outputString => {
      expect(outputString).toMatchSnapshot();
      done();
    },
    "+"
  );
});

test("sections should be able to align text right", done => {
  ReactCLI(
    <div align="right">Right text</div>,
    undefined,
    50,
    outputString => {
      expect(outputString).toMatchSnapshot();
      done();
    },
    "+"
  );
});

test("sections should be able to align text center", done => {
  ReactCLI(
    <div align="center">Center text</div>,
    undefined,
    50,
    outputString => {
      expect(outputString).toMatchSnapshot();
      done();
    },
    "+"
  );
});

test("sections should be able to render a border", done => {
  ReactCLI(
    <div>
      <div
        align="center"
        border={{
          horizontal: "-",
          vertical: "|",
          cornerTopLeft: "*",
          cornerTopRight: "*",
          cornerBottomLeft: "*",
          cornerBottomRight: "*"
        }}
      >
        Test section with border
      </div>
    </div>,
    undefined,
    50,
    outputString => {
      expect(outputString).toMatchSnapshot();
      done();
    },
    "+"
  );

  ReactCLI(
    <div horizontal border={{ horizontal: "*", vertical: "*" }}>
      Some Text
      <div
        align="center"
        border={{
          horizontal: "-",
          vertical: "|",
          cornerTopLeft: "*",
          cornerTopRight: "*",
          cornerBottomLeft: "*",
          cornerBottomRight: "*"
        }}
      >
        Test section with border
      </div>
    </div>,
    undefined,
    50,
    outputString => {
      expect(outputString).toMatchSnapshot();
      done();
    },
    "+"
  );
});
