"use client";

import { Button } from "@/components/ui/button";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import { useEditor } from "@/features/editor/hooks/use-editor";
import { ActiveTool, selectionDependentTools } from "../editor/types";
import hexToRgba from "hex-to-rgba";
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { CiFileOn } from "react-icons/ci";
import { ChevronDown } from "lucide-react";
import CssFilterConverter from "css-filter-converter";
import { Input } from "@/components/ui/input";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({
  subsets: ["latin"],
  display: "swap",
});

export const Scheme = () => {
  const [schemeType, setSchemeType] = useState("triade");
  const [schemeVariation, setSchemeVariation] = useState("soft");
  const [schemeTypeString, setSchemeTypeString] = useState("");
  const [schemeVariationString, setSchemeVariationString] = useState("");
  const [userColor, setUserColor] = useState("");

  const profilePicRef = useRef<HTMLDivElement>(null);

  const stories1Ref = useRef<HTMLDivElement>(null);
  const stories2Ref = useRef<HTMLDivElement>(null);
  const stories3Ref = useRef<HTMLDivElement>(null);
  const stories4Ref = useRef<HTMLDivElement>(null);
  const stories5Ref = useRef<HTMLDivElement>(null);

  const post1Ref = useRef<HTMLDivElement>(null);
  const post2Ref = useRef<HTMLDivElement>(null);
  const post3Ref = useRef<HTMLDivElement>(null);
  const post4Ref = useRef<HTMLDivElement>(null);
  const post5Ref = useRef<HTMLDivElement>(null);
  const post6Ref = useRef<HTMLDivElement>(null);
  const post7Ref = useRef<HTMLDivElement>(null);
  const post8Ref = useRef<HTMLDivElement>(null);
  const post9Ref = useRef<HTMLDivElement>(null);
  const post10Ref = useRef<HTMLDivElement>(null);
  const post11Ref = useRef<HTMLDivElement>(null);
  const post12Ref = useRef<HTMLDivElement>(null);

  const divColorRef1 = useRef<HTMLDivElement>(null);
  const divColorRef2 = useRef<HTMLDivElement>(null);
  const divColorRef3 = useRef<HTMLDivElement>(null);
  const divColorRef4 = useRef<HTMLDivElement>(null);
  const divColorRef5 = useRef<HTMLDivElement>(null);
  const divColorRef6 = useRef<HTMLDivElement>(null);
  const divColorRef7 = useRef<HTMLDivElement>(null);
  const divColorRef8 = useRef<HTMLDivElement>(null);
  const divColorRef9 = useRef<HTMLDivElement>(null);
  const divColorRef10 = useRef<HTMLDivElement>(null);
  const divColorRef11 = useRef<HTMLDivElement>(null);
  const divColorRef12 = useRef<HTMLDivElement>(null);

  const [color1, setColor1] = useState("3C49F6");
  const [color2, setColor2] = useState("3C49F6");
  const [color3, setColor3] = useState("3C49F6");
  const [color4, setColor4] = useState("3C49F6");
  const [color5, setColor5] = useState("3C49F6");
  const [color6, setColor6] = useState("3C49F6");
  const [color7, setColor7] = useState("3C49F6");
  const [color8, setColor8] = useState("3C49F6");
  const [color9, setColor9] = useState("3C49F6");
  const [color10, setColor10] = useState("3C49F6");
  const [color11, setColor11] = useState("3C49F6");
  const [color12, setColor12] = useState("3C49F6");

  var hexToHsl = require("hex-to-hsl");

  useEffect(() => {
    if (schemeType === "mono") {
      setSchemeTypeString("Монохроматична");
    }
    if (schemeType === "contrast") {
      setSchemeTypeString("Контрастна");
    }
    if (schemeType === "triade") {
      setSchemeTypeString("Тріадична");
    }
    if (schemeType === "analogic") {
      setSchemeTypeString("Аналогова");
    }
  }, [schemeType]);

  useEffect(() => {
    if (schemeVariation === "default") {
      setSchemeVariationString("Стандартна");
    }
    if (schemeVariation === "pastel") {
      setSchemeVariationString("Пастельна");
    }
    if (schemeVariation === "soft") {
      setSchemeVariationString("М'яка");
    }
    if (schemeVariation === "light") {
      setSchemeVariationString("Світла");
    }
    if (schemeVariation === "hard") {
      setSchemeVariationString("Тяжка");
    }
    if (schemeVariation === "pale") {
      setSchemeVariationString("Бліда");
    }
  }, [schemeVariation]);

  const newPalette = () => {
    if (schemeType === "mono") {
      if (userColor) {
        const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        if (hexColorRegex.test(userColor)) {
          const hue = hexToHsl(userColor)[0];
          var ColorScheme = require("color-scheme");
          var scheme = new ColorScheme();
          scheme.from_hue(hue).scheme(schemeType).variation(schemeVariation);
          setColor1(scheme.colors()[0]);
          setColor2(scheme.colors()[1]);
          setColor3(scheme.colors()[2]);
          setColor4(scheme.colors()[3]);
          setColor5(scheme.colors()[0]);
          setColor6(scheme.colors()[1]);
          setColor7(scheme.colors()[2]);
          setColor8(scheme.colors()[3]);
          setColor9(scheme.colors()[0]);
          setColor10(scheme.colors()[1]);
          setColor11(scheme.colors()[2]);
          setColor12(scheme.colors()[3]);
        } else {
          alert("Введіть колір у форматі HEX");
        }
      } else alert("Введіть колір");
    }
    if (schemeType === "contrast") {
      if (userColor) {
        const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        if (hexColorRegex.test(userColor)) {
          const hue = hexToHsl(userColor)[0];
          var ColorScheme = require("color-scheme");
          var scheme = new ColorScheme();
          scheme.from_hue(hue).scheme(schemeType).variation(schemeVariation);
          setColor1(scheme.colors()[0]);
          setColor2(scheme.colors()[1]);
          setColor3(scheme.colors()[2]);
          setColor4(scheme.colors()[3]);
          setColor5(scheme.colors()[4]);
          setColor6(scheme.colors()[5]);
          setColor7(scheme.colors()[6]);
          setColor8(scheme.colors()[7]);
          setColor9(scheme.colors()[0]);
          setColor10(scheme.colors()[1]);
          setColor11(scheme.colors()[2]);
          setColor12(scheme.colors()[3]);
        } else {
          alert("Введіть колір у форматі HEX");
        }
      } else alert("Введіть колір");
    }
    if (schemeType === "triade") {
      if (userColor) {
        const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        if (hexColorRegex.test(userColor)) {
          const hue = hexToHsl(userColor)[0];
          var ColorScheme = require("color-scheme");
          var scheme = new ColorScheme();
          scheme.from_hue(hue).scheme(schemeType).variation(schemeVariation);
          setColor1(scheme.colors()[0]);
          setColor2(scheme.colors()[1]);
          setColor3(scheme.colors()[2]);
          setColor4(scheme.colors()[3]);
          setColor5(scheme.colors()[4]);
          setColor6(scheme.colors()[5]);
          setColor7(scheme.colors()[6]);
          setColor8(scheme.colors()[7]);
          setColor9(scheme.colors()[0]);
          setColor10(scheme.colors()[1]);
          setColor11(scheme.colors()[2]);
          setColor12(scheme.colors()[3]);
        } else {
          alert("Введіть колір у форматі HEX");
        }
      } else alert("Введіть колір");
    }

    if (schemeType === "analogic") {
      if (userColor) {
        const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        if (hexColorRegex.test(userColor)) {
          const hue = hexToHsl(userColor)[0];
          var ColorScheme = require("color-scheme");
          var scheme = new ColorScheme();
          scheme.from_hue(hue).scheme(schemeType).variation(schemeVariation);
          setColor1(scheme.colors()[0]);
          setColor2(scheme.colors()[1]);
          setColor3(scheme.colors()[2]);
          setColor4(scheme.colors()[3]);
          setColor5(scheme.colors()[4]);
          setColor6(scheme.colors()[5]);
          setColor7(scheme.colors()[6]);
          setColor8(scheme.colors()[7]);
          setColor9(scheme.colors()[8]);
          setColor10(scheme.colors()[9]);
          setColor11(scheme.colors()[10]);
          setColor12(scheme.colors()[11]);
        } else {
          alert("Введіть колір у форматі HEX");
        }
      } else alert("Введіть колір");
    }
  };

  useEffect(() => {
    if (profilePicRef.current) {
      profilePicRef.current.style.backgroundColor = hexToRgba(color1);
      console.log("color1: " + color1);
    }
    if (stories1Ref.current) {
      stories1Ref.current.style.backgroundColor = hexToRgba(color2);
      console.log("color1: " + color2);
    }
    if (stories2Ref.current) {
      stories2Ref.current.style.backgroundColor = hexToRgba(color3);
      console.log("color3: " + color3);
    }
    if (stories3Ref.current) {
      stories3Ref.current.style.backgroundColor = hexToRgba(color4);
    }
    if (stories4Ref.current) {
      stories4Ref.current.style.backgroundColor = hexToRgba(color5);
    }
    if (stories5Ref.current) {
      stories5Ref.current.style.backgroundColor = hexToRgba(color6);
    }

    if (post1Ref.current) {
      post1Ref.current.style.backgroundColor = hexToRgba(color1);
    }
    if (post2Ref.current) {
      post2Ref.current.style.backgroundColor = hexToRgba(color2);
    }
    if (post3Ref.current) {
      post3Ref.current.style.backgroundColor = hexToRgba(color3);
    }
    if (post4Ref.current) {
      post4Ref.current.style.backgroundColor = hexToRgba(color4);
    }
    if (post5Ref.current) {
      post5Ref.current.style.backgroundColor = hexToRgba(color5);
    }
    if (post6Ref.current) {
      post6Ref.current.style.backgroundColor = hexToRgba(color6);
    }
    if (post7Ref.current) {
      post7Ref.current.style.backgroundColor = hexToRgba(color7);
    }
    if (post8Ref.current) {
      post8Ref.current.style.backgroundColor = hexToRgba(color8);
    }
    if (post9Ref.current) {
      post9Ref.current.style.backgroundColor = hexToRgba(color9);
    }
    if (post10Ref.current) {
      post10Ref.current.style.backgroundColor = hexToRgba(color10);
    }
    if (post11Ref.current) {
      post11Ref.current.style.backgroundColor = hexToRgba(color11);
    }
    if (post12Ref.current) {
      post12Ref.current.style.backgroundColor = hexToRgba(color12);
    }

    if (divColorRef1.current) {
      divColorRef1.current.style.backgroundColor = hexToRgba(color1);
    }
    if (divColorRef2.current) {
      divColorRef2.current.style.backgroundColor = hexToRgba(color2);
    }
    if (divColorRef3.current) {
      divColorRef3.current.style.backgroundColor = hexToRgba(color3);
    }
    if (divColorRef4.current) {
      divColorRef4.current.style.backgroundColor = hexToRgba(color4);
    }
    if (divColorRef5.current) {
      divColorRef5.current.style.backgroundColor = hexToRgba(color5);
    }
    if (divColorRef6.current) {
      divColorRef6.current.style.backgroundColor = hexToRgba(color6);
    }

    if (divColorRef7.current) {
      divColorRef7.current.style.backgroundColor = hexToRgba(color7);
    }
    if (divColorRef8.current) {
      divColorRef8.current.style.backgroundColor = hexToRgba(color8);
    }
    if (divColorRef9.current) {
      divColorRef9.current.style.backgroundColor = hexToRgba(color9);
    }
    if (divColorRef10.current) {
      divColorRef10.current.style.backgroundColor = hexToRgba(color10);
    }
    if (divColorRef11.current) {
      divColorRef11.current.style.backgroundColor = hexToRgba(color11);
    }
    if (divColorRef12.current) {
      divColorRef12.current.style.backgroundColor = hexToRgba(color12);
    }

    if (profilePicRef.current?.style.backgroundImage) {
      const filterFromColor = CssFilterConverter.hexToFilter("#" + color1);
      if (filterFromColor.color) {
        const hueRotate = filterFromColor.color.match(
          /hue-rotate\((\d+)deg\)/
        )?.[1];
        profilePicRef.current.style.filter = `hue-rotate(${hueRotate}deg)`;
        profilePicRef.current.style.mixBlendMode = "multiply";
      }
    }

    if (stories1Ref.current?.style.backgroundImage) {
      const filterFromColor = CssFilterConverter.hexToFilter("#" + color2);
      if (filterFromColor.color) {
        const hueRotate = filterFromColor.color.match(
          /hue-rotate\((\d+)deg\)/
        )?.[1];
        stories1Ref.current.style.filter = `hue-rotate(${hueRotate}deg)`;
        stories1Ref.current.style.mixBlendMode = "multiply";
      }
    }

    if (stories2Ref.current?.style.backgroundImage) {
      const filterFromColor = CssFilterConverter.hexToFilter("#" + color2);
      if (filterFromColor.color) {
        const hueRotate = filterFromColor.color.match(
          /hue-rotate\((\d+)deg\)/
        )?.[1];
        stories2Ref.current.style.filter = `hue-rotate(${hueRotate}deg)`;
        stories2Ref.current.style.mixBlendMode = "multiply";
      }
    }

    if (stories3Ref.current?.style.backgroundImage) {
      const filterFromColor = CssFilterConverter.hexToFilter("#" + color3);
      if (filterFromColor.color) {
        const hueRotate = filterFromColor.color.match(
          /hue-rotate\((\d+)deg\)/
        )?.[1];
        stories3Ref.current.style.filter = `hue-rotate(${hueRotate}deg)`;
        stories3Ref.current.style.mixBlendMode = "multiply";
      }
    }

    if (stories4Ref.current?.style.backgroundImage) {
      const filterFromColor = CssFilterConverter.hexToFilter("#" + color4);
      if (filterFromColor.color) {
        const hueRotate = filterFromColor.color.match(
          /hue-rotate\((\d+)deg\)/
        )?.[1];
        stories4Ref.current.style.filter = `hue-rotate(${hueRotate}deg)`;
        stories4Ref.current.style.mixBlendMode = "multiply";
      }
    }

    if (stories5Ref.current?.style.backgroundImage) {
      const filterFromColor = CssFilterConverter.hexToFilter("#" + color5);
      if (filterFromColor.color) {
        const hueRotate = filterFromColor.color.match(
          /hue-rotate\((\d+)deg\)/
        )?.[1];
        stories5Ref.current.style.filter = `hue-rotate(${hueRotate}deg)`;
        stories5Ref.current.style.mixBlendMode = "multiply";
      }
    }

    if (stories5Ref.current?.style.backgroundImage) {
      const filterFromColor = CssFilterConverter.hexToFilter("#" + color6);
      if (filterFromColor.color) {
        const hueRotate = filterFromColor.color.match(
          /hue-rotate\((\d+)deg\)/
        )?.[1];
        stories5Ref.current.style.filter = `hue-rotate(${hueRotate}deg)`;
        stories5Ref.current.style.mixBlendMode = "multiply";
      }
    }

    if (post1Ref.current?.style.backgroundImage) {
      const filterFromColor = CssFilterConverter.hexToFilter("#" + color1);
      if (filterFromColor.color) {
        const hueRotate = filterFromColor.color.match(
          /hue-rotate\((\d+)deg\)/
        )?.[1];
        post1Ref.current.style.filter = `hue-rotate(${hueRotate}deg)`;
        post1Ref.current.style.mixBlendMode = "multiply";
      }
    }

    if (post2Ref.current?.style.backgroundImage) {
      const filterFromColor = CssFilterConverter.hexToFilter("#" + color2);
      if (filterFromColor.color) {
        const hueRotate = filterFromColor.color.match(
          /hue-rotate\((\d+)deg\)/
        )?.[1];
        post2Ref.current.style.filter = `hue-rotate(${hueRotate}deg)`;
        post2Ref.current.style.mixBlendMode = "multiply";
      }
    }

    if (post3Ref.current?.style.backgroundImage) {
      const filterFromColor = CssFilterConverter.hexToFilter("#" + color3);
      if (filterFromColor.color) {
        const hueRotate = filterFromColor.color.match(
          /hue-rotate\((\d+)deg\)/
        )?.[1];
        post3Ref.current.style.filter = `hue-rotate(${hueRotate}deg)`;
        post3Ref.current.style.mixBlendMode = "multiply";
      }
    }

    if (post4Ref.current?.style.backgroundImage) {
      const filterFromColor = CssFilterConverter.hexToFilter("#" + color4);
      if (filterFromColor.color) {
        const hueRotate = filterFromColor.color.match(
          /hue-rotate\((\d+)deg\)/
        )?.[1];
        post4Ref.current.style.filter = `hue-rotate(${hueRotate}deg)`;
        post4Ref.current.style.mixBlendMode = "multiply";
      }
    }

    if (post5Ref.current?.style.backgroundImage) {
      const filterFromColor = CssFilterConverter.hexToFilter("#" + color5);
      if (filterFromColor.color) {
        const hueRotate = filterFromColor.color.match(
          /hue-rotate\((\d+)deg\)/
        )?.[1];
        post5Ref.current.style.filter = `hue-rotate(${hueRotate}deg)`;
        post5Ref.current.style.mixBlendMode = "multiply";
      }
    }

    if (post6Ref.current?.style.backgroundImage) {
      const filterFromColor = CssFilterConverter.hexToFilter("#" + color6);
      if (filterFromColor.color) {
        const hueRotate = filterFromColor.color.match(
          /hue-rotate\((\d+)deg\)/
        )?.[1];
        post6Ref.current.style.filter = `hue-rotate(${hueRotate}deg)`;
        post6Ref.current.style.mixBlendMode = "multiply";
      }
    }

    if (post7Ref.current?.style.backgroundImage) {
      const filterFromColor = CssFilterConverter.hexToFilter("#" + color7);
      if (filterFromColor.color) {
        const hueRotate = filterFromColor.color.match(
          /hue-rotate\((\d+)deg\)/
        )?.[1];
        post7Ref.current.style.filter = `hue-rotate(${hueRotate}deg)`;
        post7Ref.current.style.mixBlendMode = "multiply";
      }
    }

    if (post8Ref.current?.style.backgroundImage) {
      const filterFromColor = CssFilterConverter.hexToFilter("#" + color8);
      if (filterFromColor.color) {
        const hueRotate = filterFromColor.color.match(
          /hue-rotate\((\d+)deg\)/
        )?.[1];
        post8Ref.current.style.filter = `hue-rotate(${hueRotate}deg)`;
        post8Ref.current.style.mixBlendMode = "multiply";
      }
    }

    if (post9Ref.current?.style.backgroundImage) {
      const filterFromColor = CssFilterConverter.hexToFilter("#" + color9);
      if (filterFromColor.color) {
        const hueRotate = filterFromColor.color.match(
          /hue-rotate\((\d+)deg\)/
        )?.[1];
        post9Ref.current.style.filter = `hue-rotate(${hueRotate}deg)`;
        post9Ref.current.style.mixBlendMode = "multiply";
      }
    }

    if (post10Ref.current?.style.backgroundImage) {
      const filterFromColor = CssFilterConverter.hexToFilter("#" + color10);
      if (filterFromColor.color) {
        const hueRotate = filterFromColor.color.match(
          /hue-rotate\((\d+)deg\)/
        )?.[1];
        post10Ref.current.style.filter = `hue-rotate(${hueRotate}deg)`;
        post10Ref.current.style.mixBlendMode = "multiply";
      }
    }

    if (post11Ref.current?.style.backgroundImage) {
      const filterFromColor = CssFilterConverter.hexToFilter("#" + color11);
      if (filterFromColor.color) {
        const hueRotate = filterFromColor.color.match(
          /hue-rotate\((\d+)deg\)/
        )?.[1];
        post11Ref.current.style.filter = `hue-rotate(${hueRotate}deg)`;
        post11Ref.current.style.mixBlendMode = "multiply";
      }
    }

    if (post12Ref.current?.style.backgroundImage) {
      const filterFromColor = CssFilterConverter.hexToFilter("#" + color12);
      if (filterFromColor.color) {
        const hueRotate = filterFromColor.color.match(
          /hue-rotate\((\d+)deg\)/
        )?.[1];
        post12Ref.current.style.filter = `hue-rotate(${hueRotate}deg)`;
        post12Ref.current.style.mixBlendMode = "multiply";
      }
    }
  }, [
    color1,
    color2,
    color3,
    color4,
    color5,
    color6,
    color7,
    color8,
    color9,
    color10,
    color11,
    color12,
  ]);

  const handleDivClick = (
    event: React.MouseEvent<HTMLDivElement>,
    colorString: string
  ) => {
    const divRef = event.currentTarget;
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    const filterFromColor = CssFilterConverter.hexToFilter("#" + colorString);
    console.log(filterFromColor);
    console.log("filterFromColor: " + filterFromColor.color);

    if (filterFromColor.color) {
      const hueRotate = filterFromColor.color.match(
        /hue-rotate\((\d+)deg\)/
      )?.[1];

      input.onchange = (e) => {
        const fileInput = e.target as HTMLInputElement;
        if (fileInput.files && fileInput.files.length > 0) {
          const file = fileInput.files[0];
          const reader = new FileReader();
          reader.onload = () => {
            divRef.style.backgroundImage = `url(${reader.result})`;
            divRef.style.backgroundPosition = "center";
            divRef.style.backgroundSize = "cover";
            divRef.style.backgroundRepeat = "none";
            divRef.style.filter = `hue-rotate(${hueRotate}deg)`;
            divRef.style.mixBlendMode = "multiply";
            divRef.innerHTML = "";
          };
          reader.readAsDataURL(file);
        }
      };
      input.click();
    }
  };

  const copyToClipboard = (color: string) => {
    navigator.clipboard.writeText(color).then(() => {
      alert("Колір було скопійовано");
    });
  };

  return (
      <div className="bg-primary h-lvh flex">
        {/* Sidebar */}
        <div className={unbounded.className}>
        <div className="bg-muted w-[360px] flex flex-col gap-y-4 p-2 h-full">
          <div className="text-primary font-bold text-[20px] p-2 flex items-center justify-center rounded-md">
            Кольорова схема
          </div>
          <div className="flex items-center">
            <Input
              className="bg-muted hover:bg-secondary text-primary hover:text-primary transition text-sm font-bold"
              placeholder="Ваш колір у HEX"
              value={userColor}
              onChange={(e) => setUserColor(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center ">
            <p className="text-primary font-bold text-sm">Схема:</p>
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button
                  size="sm"
                  variant="ghost"
                  className="hover:bg-secondary hover:text-muted h-[40px]"
                >
                  <p className="text-primary font-bold text-sm">
                    {schemeTypeString}
                  </p>
                  <ChevronDown className="size-4 ml-2 text-primary" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="min-w-60 bg-primary"
              >
                <DropdownMenuItem
                  onClick={() => setSchemeType("mono")}
                  className="flex items-center gap-x-2 hover:bg-secondary hover:cursor-pointer transition"
                >
                  <div className="text-muted">
                    <p>
                      <b>Монохроматична</b>
                    </p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSchemeType("contrast")}
                  className="flex items-center gap-x-2 hover:bg-secondary hover:cursor-pointer transition"
                >
                  <div className="text-muted">
                    <p>
                      <b>Контрастна</b>
                    </p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSchemeType("triade")}
                  className="flex items-center gap-x-2 hover:bg-secondary hover:cursor-pointer transition"
                >
                  <div className="text-muted">
                    <p>
                      <b>Тріадична</b>
                    </p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSchemeType("analogic")}
                  className="flex items-center gap-x-2 hover:bg-secondary hover:cursor-pointer transition"
                >
                  <div className="text-muted">
                    <p>
                      <b>Аналогова</b>
                    </p>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-primary font-bold text-sm">Варіація:</p>
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button
                  size="sm"
                  variant="ghost"
                  className="hover:bg-secondary hover:text-muted h-[40px]"
                >
                  <p className="text-primary font-bold text-sm">
                    {schemeVariationString}
                  </p>
                  <ChevronDown className="size-4 ml-2 text-primary" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="min-w-60 bg-primary"
              >
                <DropdownMenuItem
                  onClick={() => setSchemeVariation("default")}
                  className="flex items-center gap-x-2 hover:bg-secondary hover:cursor-pointer transition"
                >
                  <div className="text-muted">
                    <p>
                      <b>Стандартна</b>
                    </p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSchemeVariation("pastel")}
                  className="flex items-center gap-x-2 hover:bg-secondary hover:cursor-pointer transition"
                >
                  <div className="text-muted">
                    <p>
                      <b>Пастельна</b>
                    </p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSchemeVariation("soft")}
                  className="flex items-center gap-x-2 hover:bg-secondary hover:cursor-pointer transition"
                >
                  <div className="text-muted">
                    <p>
                      <b>М'яка</b>
                    </p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSchemeVariation("light")}
                  className="flex items-center gap-x-2 hover:bg-secondary hover:cursor-pointer transition"
                >
                  <div className="text-muted">
                    <p>
                      <b>Світла</b>
                    </p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSchemeVariation("hard")}
                  className="flex items-center gap-x-2 hover:bg-secondary hover:cursor-pointer transition"
                >
                  <div className="text-muted">
                    <p>
                      <b>Тяжка</b>
                    </p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSchemeVariation("pale")}
                  className="flex items-center gap-x-2 hover:bg-secondary hover:cursor-pointer transition"
                >
                  <div className="text-muted">
                    <p>
                      <b>Бліда</b>
                    </p>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Button
            size="lg"
            variant="ghost"
            className="bg-primary text-muted p-2 hover:bg-third text-md font-bold"
            onClick={newPalette}
          >
            <p>ЗГЕНЕРУВАТИ КОЛЬОРИ</p>
          </Button>
          <div className="flex flex-col text-primary text-md ">
            <div
              className="flex items-center my-1 hover:cursor-pointer hover:bg-secondary transition p-1 rounded-sm"
              onClick={() => copyToClipboard("#" + color1)}
            >
              <div
                className="h-[24px] w-[24px] rounded-full mr-2 border-2 border-black"
                ref={divColorRef1}
                id="divColorId1"
              ></div>
              <div>
                <b>Колір 1: </b>
                {"#" + color1}
              </div>
            </div>
            <div
              className="flex items-center my-1 hover:cursor-pointer hover:bg-secondary transition p-1 rounded-sm"
              onClick={() => copyToClipboard("#" + color2)}
            >
              <div
                className="h-[24px] w-[24px] rounded-full mr-2 border-2 border-black"
                ref={divColorRef2}
                id="divColorId1"
              ></div>
              <div>
                <b>Колір 2: </b>
                {"#" + color2}
              </div>
            </div>
            <div
              className="flex items-center my-1 hover:cursor-pointer hover:bg-secondary transition p-1 rounded-sm"
              onClick={() => copyToClipboard("#" + color3)}
            >
              <div
                className="h-[24px] w-[24px] rounded-full mr-2 border-2 border-black"
                ref={divColorRef3}
                id="divColorId1"
              ></div>
              <div>
                <b>Колір 3: </b>
                {"#" + color3}
              </div>
            </div>
            <div
              className="flex items-center my-1 hover:cursor-pointer hover:bg-secondary transition p-1 rounded-sm"
              onClick={() => copyToClipboard("#" + color4)}
            >
              <div
                className="h-[24px] w-[24px] rounded-full mr-2 border-2 border-black"
                ref={divColorRef4}
                id="divColorId1"
              ></div>
              <div>
                <b>Колір 4: </b>
                {"#" + color4}
              </div>
            </div>
            <div
              className="flex items-center my-1 hover:cursor-pointer hover:bg-secondary transition p-1 rounded-sm"
              onClick={() => copyToClipboard("#" + color5)}
            >
              <div
                className="h-[24px] w-[24px] rounded-full mr-2 border-2 border-black"
                ref={divColorRef5}
                id="divColorId1"
              ></div>
              <div>
                <b>Колір 5: </b>
                {"#" + color5}
              </div>
            </div>
            <div
              className="flex items-center my-1 hover:cursor-pointer hover:bg-secondary transition p-1 rounded-sm"
              onClick={() => copyToClipboard("#" + color6)}
            >
              <div
                className="h-[24px] w-[24px] rounded-full mr-2 border-2 border-black"
                ref={divColorRef6}
                id="divColorId1"
              ></div>
              <div>
                <b>Колір 6: </b>
                {"#" + color6}
              </div>
            </div>
            <div
              className="flex items-center my-1 hover:cursor-pointer hover:bg-secondary transition p-1 rounded-sm"
              onClick={() => copyToClipboard("#" + color7)}
            >
              <div
                className="h-[24px] w-[24px] rounded-full mr-2 border-2 border-black"
                ref={divColorRef7}
                id="divColorId1"
              ></div>
              <div>
                <b>Колір 7: </b>
                {"#" + color7}
              </div>
            </div>
            <div
              className="flex items-center my-1 hover:cursor-pointer hover:bg-secondary transition p-1 rounded-sm"
              onClick={() => copyToClipboard("#" + color8)}
            >
              <div
                className="h-[24px] w-[24px] rounded-full mr-2 border-2 border-black"
                ref={divColorRef8}
                id="divColorId1"
              ></div>
              <div>
                <b>Колір 8: </b>
                {"#" + color8}
              </div>
            </div>
            <div
              className="flex items-center my-1 hover:cursor-pointer hover:bg-secondary transition p-1 rounded-sm"
              onClick={() => copyToClipboard("#" + color9)}
            >
              <div
                className="h-[24px] w-[24px] rounded-full mr-2 border-2 border-black"
                ref={divColorRef9}
                id="divColorId1"
              ></div>
              <div>
                <b>Колір 9: </b>
                {"#" + color9}
              </div>
            </div>
            <div
              className="flex items-center my-1 hover:cursor-pointer hover:bg-secondary transition p-1 rounded-sm"
              onClick={() => copyToClipboard("#" + color10)}
            >
              <div
                className="h-[24px] w-[24px] rounded-full mr-2 border-2 border-black"
                ref={divColorRef10}
                id="divColorId1"
              ></div>
              <div>
                <b>Колір 10: </b>
                {"#" + color10}
              </div>
            </div>
            <div
              className="flex items-center my-1 hover:cursor-pointer hover:bg-secondary transition p-1 rounded-sm"
              onClick={() => copyToClipboard("#" + color11)}
            >
              <div
                className="h-[24px] w-[24px] rounded-full mr-2 border-2 border-black"
                ref={divColorRef11}
                id="divColorId1"
              ></div>
              <div>
                <b>Колір 11: </b>
                {"#" + color11}
              </div>
            </div>
            <div
              className="flex items-center my-1 hover:cursor-pointer hover:bg-secondary transition p-1 rounded-sm"
              onClick={() => copyToClipboard("#" + color12)}
            >
              <div
                className="h-[24px] w-[24px] rounded-full mr-2 border-2 border-black"
                ref={divColorRef12}
                id="divColorId1"
              ></div>
              <div>
                <b>Колір 12: </b>
                {"#" + color12}
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="w-full flex">
          <div className="bg-primary flex flex-col items-center justify-center p-6 flex-1">
            <div className="bg-white h-[760px] w-[380px] flex flex-col">
              <div className="flex items-center justify-around p-4 gap-x-2">
                {/* Аватарка */}
                <div
                  className="bg-muted rounded-full w-[80px] h-[80px] hover:cursor-pointer hover:opacity-80 transition"
                  ref={profilePicRef}
                  id="profilePicId"
                  onClick={(event) => handleDivClick(event, color1)}
                />

                <div className="flex flex-col items-center justify-center text-sm text-black">
                  <p className="font-bold">0</p>
                  <p>Дописи</p>
                </div>
                <div className="flex flex-col items-center justify-center text-sm text-black">
                  <p className="font-bold">0</p>
                  <p>Читачі</p>
                </div>
                <div className="flex flex-col items-center justify-center text-sm text-black">
                  <p className="font-bold">0</p>
                  <p>Відстежуються</p>
                </div>
              </div>

              <div className="flex items-center justify-around px-2 py-4 text-sm gap-x-2">
                <div className="bg-sky-400 py-1.5 rounded-lg text-primary flex-1 text-center font-semibold">
                  Стежити
                </div>
                <div className="bg-gray-200 py-1.5 rounded-lg text-black flex-1 text-center font-semibold">
                  Повідомлення
                </div>
              </div>

              <div className="flex justify-evenly text-sm text-black mb-4 px-2">
                <div className="flex flex-col items-center justify-center flex-1 gap-y-2">
                  <div className="border-2 border-gray-200 p-0.5 w-[64px] h-[64px] rounded-full flex items-center justify-center">
                    {/* Сторис */}
                    <div
                      className="bg-muted w-full h-full rounded-full hover:cursor-pointer hover:opacity-80 transition"
                      ref={stories1Ref}
                      id="stories1Id"
                      onClick={(event) => handleDivClick(event, color2)}
                    ></div>
                  </div>
                  <div>WORK</div>
                </div>
                <div className="flex flex-col items-center justify-center flex-1 gap-y-2">
                  <div className="border-2 border-gray-200 p-0.5 w-[64px] h-[64px] rounded-full flex items-center justify-center">
                    {/* Сторис */}
                    <div
                      className="bg-muted w-full h-full rounded-full hover:cursor-pointer hover:opacity-80 transition"
                      ref={stories2Ref}
                      onClick={(event) => handleDivClick(event, color3)}
                    ></div>
                  </div>
                  <div>sum'24</div>
                </div>
                <div className="flex flex-col items-center justify-center flex-1 gap-y-2">
                  <div className="border-2 border-gray-200 p-0.5 w-[64px] h-[64px] rounded-full flex items-center justify-center">
                    {/* Сторис */}
                    <div
                      className="bg-muted w-full h-full rounded-full hover:cursor-pointer hover:opacity-80 transition"
                      ref={stories3Ref}
                      id="stories3Id"
                      onClick={(event) => handleDivClick(event, color4)}
                    ></div>
                  </div>
                  <div>BEST</div>
                </div>
                <div className="flex flex-col items-center justify-center flex-1 gap-y-2">
                  <div className="border-2 border-gray-200 p-0.5 w-[64px] h-[64px] rounded-full flex items-center justify-center">
                    {/* Сторис */}
                    <div
                      className="bg-muted w-full h-full rounded-full hover:cursor-pointer hover:opacity-80 transition"
                      ref={stories4Ref}
                      id="stories4Id"
                      onClick={(event) => handleDivClick(event, color5)}
                    ></div>
                  </div>
                  <div>LIFE</div>
                </div>
                <div className="flex flex-col items-center justify-center flex-1 gap-y-2">
                  <div className="border-2 border-gray-200 p-0.5 w-[64px] h-[64px] rounded-full flex items-center justify-center">
                    {/* Сторис */}
                    <div
                      className="bg-muted w-full h-full rounded-full hover:cursor-pointer hover:opacity-80 transition"
                      ref={stories5Ref}
                      id="stories5Id"
                      onClick={(event) => handleDivClick(event, color6)}
                    ></div>
                  </div>
                  <div>SMTHNG</div>
                </div>
              </div>

              <div className="grid grid-cols-3 flex-1 gap-y-0.5 gap-x-0.5 text-black font-bold auto-rows-fr auto-cols-fr ">
                {/* Пост */}
                <div
                  className="bg-muted flex items-center justify-center hover:cursor-pointer hover:opacity-80 transition"
                  ref={post1Ref}
                  id="post1Id"
                  onClick={(event) => handleDivClick(event, color1)}
                >
                  крупний план
                </div>

                {/* Пост */}
                <div
                  className="bg-muted flex items-center justify-center hover:cursor-pointer hover:opacity-80 transition"
                  ref={post2Ref}
                  id="post2Id"
                  onClick={(event) => handleDivClick(event, color2)}
                >
                  текст
                </div>

                {/* Пост */}
                <div
                  className="bg-muted flex items-center justify-center hover:cursor-pointer hover:opacity-80 transition"
                  ref={post3Ref}
                  id="post3Id"
                  onClick={(event) => handleDivClick(event, color3)}
                >
                  деталі
                </div>

                {/* Пост */}
                <div
                  className="bg-muted flex items-center justify-center hover:cursor-pointer hover:opacity-80 transition"
                  ref={post4Ref}
                  id="post4Id"
                  onClick={(event) => handleDivClick(event, color4)}
                >
                  архітектура
                </div>

                {/* Пост */}
                <div
                  className="bg-muted flex items-center justify-center hover:cursor-pointer hover:opacity-80 transition"
                  ref={post5Ref}
                  id="post5Id"
                  onClick={(event) => handleDivClick(event, color5)}
                >
                  середній план
                </div>

                {/* Пост */}
                <div
                  className="bg-muted flex items-center justify-center hover:cursor-pointer hover:opacity-80 transition"
                  ref={post6Ref}
                  id="post6Id"
                  onClick={(event) => handleDivClick(event, color6)}
                >
                  дальній план
                </div>

                {/* Пост */}
                <div
                  className="bg-muted flex items-center justify-center hover:cursor-pointer hover:opacity-80 transition"
                  ref={post7Ref}
                  id="post7Id"
                  onClick={(event) => handleDivClick(event, color7)}
                >
                  деталі
                </div>

                {/* Пост */}
                <div
                  className="bg-muted flex items-center justify-center hover:cursor-pointer hover:opacity-80 transition"
                  ref={post8Ref}
                  id="post8Id"
                  onClick={(event) => handleDivClick(event, color8)}
                >
                  текст
                </div>

                {/* Пост */}
                <div
                  className="bg-muted flex items-center justify-center hover:cursor-pointer hover:opacity-80 transition"
                  ref={post9Ref}
                  id="post9Id"
                  onClick={(event) => handleDivClick(event, color9)}
                >
                  портрет
                </div>

                {/* Пост */}
                <div
                  className="bg-muted flex items-center justify-center hover:cursor-pointer hover:opacity-80 transition"
                  ref={post10Ref}
                  id="post10Id"
                  onClick={(event) => handleDivClick(event, color10)}
                >
                  дальній план
                </div>

                {/* Пост */}
                <div
                  className="bg-muted flex items-center justify-center hover:cursor-pointer hover:opacity-80 transition"
                  ref={post11Ref}
                  id="post11Id"
                  onClick={(event) => handleDivClick(event, color11)}
                >
                  крупний план
                </div>

                {/* Пост */}
                <div
                  className="bg-muted flex items-center justify-center hover:cursor-pointer hover:opacity-80 transition"
                  ref={post12Ref}
                  id="post12Id"
                  onClick={(event) => handleDivClick(event, color12)}
                >
                  природа
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
